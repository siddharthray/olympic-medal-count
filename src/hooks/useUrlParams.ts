import { useState, useEffect } from "react";
import { SortType } from "../types/models";

/**
 * Custom hook to manage URL parameters for sorting
 */
export const useUrlParams = (
  defaultSort: SortType = "gold"
): [SortType, (newSort: SortType) => void] => {
  // Get initial sort parameter from URL or use default
  const getInitialSortBy = (): SortType => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const sortParam = urlParams.get("sort");
      if (
        sortParam === "gold" ||
        sortParam === "silver" ||
        sortParam === "bronze" ||
        sortParam === "total"
      ) {
        return sortParam;
      }
    }
    return defaultSort;
  };

  const [sortBy, setSortBy] = useState<SortType>(getInitialSortBy());

  // Update URL when sort changes
  const handleSortChange = (newSortBy: SortType) => {
    setSortBy(newSortBy);

    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("sort", newSortBy);
      window.history.pushState({}, "", url.toString());
    }
  };

  // Listen for URL changes (like back/forward browser navigation)
  useEffect(() => {
    const handlePopState = () => {
      setSortBy(getInitialSortBy());
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return [sortBy, handleSortChange];
};

export default useUrlParams;
