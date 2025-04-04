import React, { useState, useEffect } from "react";
import { MedalTable } from "./components";
import { fetchMedalData, handleApiError } from "./services/api";
import { addTotalMedals } from "./utils/sortHelpers";
import useUrlParams from "./hooks/useUrlParams";
import { MedalWithTotal } from "./types/models";

/**
 * Main component for the Medal Count App
 */
const MedalCountApp: React.FC = () => {
  const [medals, setMedals] = useState<MedalWithTotal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [sortBy, handleSortChange] = useUrlParams("gold");

  // Fetch medals data
  useEffect(() => {
    const getMedalData = async () => {
      try {
        setLoading(true);
        const data = await fetchMedalData();

        // Add total medals to each country
        const medalsWithTotal = addTotalMedals(data);
        setMedals(medalsWithTotal);
        setError(null);
      } catch (err) {
        const errorMessage = handleApiError(err);
        setError(
          `An error occurred while fetching medal data: ${errorMessage}`
        );
        console.error("Error fetching medals:", err);
      } finally {
        setLoading(false);
      }
    };

    getMedalData();
  }, []);

  if (loading) {
    return <div>Loading medal data...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <MedalTable
        medals={medals}
        sortBy={sortBy}
        onSortChange={handleSortChange}
      />
    </div>
  );
};

export default MedalCountApp;
