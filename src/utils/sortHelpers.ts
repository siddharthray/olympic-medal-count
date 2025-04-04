import { Medal, MedalWithTotal, SortType } from "../types/models";

/**
 * Adds total medals count to each medal record
 */
export const addTotalMedals = (medals: Medal[]): MedalWithTotal[] => {
  return medals.map((medal) => ({
    ...medal,
    total: medal.gold + medal.silver + medal.bronze,
  }));
};

/**
 * Sorts medals according to the specified sort type and tiebreaker rules
 */
export const sortMedals = (
  medals: MedalWithTotal[],
  sortBy: SortType
): MedalWithTotal[] => {
  return [...medals].sort((a, b) => {
    if (sortBy === "total") {
      // Sort by total medals, ties broken by gold
      if (a.total !== b.total) {
        return b.total - a.total;
      }
      return b.gold - a.gold;
    } else if (sortBy === "gold") {
      // Sort by gold medals, ties broken by silver
      if (a.gold !== b.gold) {
        return b.gold - a.gold;
      }
      return b.silver - a.silver;
    } else if (sortBy === "silver") {
      // Sort by silver medals, ties broken by gold
      if (a.silver !== b.silver) {
        return b.silver - a.silver;
      }
      return b.gold - a.gold;
    } else {
      // Sort by bronze medals, ties broken by gold
      if (a.bronze !== b.bronze) {
        return b.bronze - a.bronze;
      }
      return b.gold - a.gold;
    }
  });
};

/**
 * Gets top N countries after sorting
 */
export const getTopCountries = (
  medals: MedalWithTotal[],
  sortBy: SortType,
  count: number = 10
): MedalWithTotal[] => {
  const sorted = sortMedals(medals, sortBy);
  return sorted.slice(0, count);
};
