import React from "react";
import CountryFlag from "../CountryFlag";
import { MedalWithTotal, SortType } from "../../types/models";
import { getTopCountries } from "../../utils/sortHelpers";
import "./MedalTable.css";

// Props for the MedalTable component
interface MedalTableProps {
  medals: MedalWithTotal[];
  sortBy: SortType;
  onSortChange: (sortBy: SortType) => void;
}

/**
 * Component to display the medal count table
 */
const MedalTable: React.FC<MedalTableProps> = ({
  medals,
  sortBy,
  onSortChange,
}) => {
  const topCountries = getTopCountries(medals, sortBy);

  return (
    <div className="medal-table">
      <h1>MEDAL COUNT</h1>

      <table>
        <thead>
          <tr>
            <th></th>
            <th colSpan={2}></th>
            <th
              className={sortBy === "gold" ? "selected" : ""}
              onClick={() => onSortChange("gold")}
              style={{ cursor: "pointer" }}
            >
              <span className="medal-icon gold"></span>
            </th>
            <th
              className={sortBy === "silver" ? "selected" : ""}
              onClick={() => onSortChange("silver")}
              style={{ cursor: "pointer" }}
            >
              <span className="medal-icon silver"></span>
            </th>
            <th
              className={sortBy === "bronze" ? "selected" : ""}
              onClick={() => onSortChange("bronze")}
              style={{ cursor: "pointer" }}
            >
              <span className="medal-icon bronze"></span>
            </th>
            <th
              className={sortBy === "total" ? "selected" : ""}
              onClick={() => onSortChange("total")}
              style={{ cursor: "pointer" }}
            >
              TOTAL
            </th>
          </tr>
        </thead>
        <tbody>
          {topCountries.map((country, index) => (
            <tr key={country.code}>
              <td>{index + 1}</td>
              <td>
                <div className="flag-container">
                  <CountryFlag countryCode={country.code} />
                </div>
              </td>
              <td>{country.code}</td>
              <td>{country.gold}</td>
              <td>{country.silver}</td>
              <td>{country.bronze}</td>
              <td>{country.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedalTable;
