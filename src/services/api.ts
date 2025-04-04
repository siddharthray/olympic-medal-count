import { Medal } from "../types/models";

// Mock medal data that would normally come from an API
const medalData: Medal[] = [
  { code: "USA", gold: 9, silver: 7, bronze: 12 },
  { code: "NOR", gold: 11, silver: 5, bronze: 10 },
  { code: "RUS", gold: 13, silver: 11, bronze: 9 },
  { code: "NED", gold: 8, silver: 7, bronze: 9 },
  { code: "FRA", gold: 4, silver: 4, bronze: 7 },
  { code: "SWE", gold: 2, silver: 7, bronze: 6 },
  { code: "ITA", gold: 0, silver: 2, bronze: 6 },
  { code: "CAN", gold: 10, silver: 10, bronze: 5 },
  { code: "SUI", gold: 6, silver: 3, bronze: 2 },
  { code: "BLR", gold: 5, silver: 0, bronze: 1 },
  { code: "GER", gold: 8, silver: 6, bronze: 5 },
  { code: "AUT", gold: 4, silver: 8, bronze: 5 },
  { code: "CHN", gold: 3, silver: 4, bronze: 2 },
];

/**
 * Simulates an API call to fetch medal data
 * In a real app, this would make an actual HTTP request
 */
export const fetchMedalData = async (): Promise<Medal[]> => {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(medalData);
    }, 500);
  });
};

/**
 * Handles API errors
 */
export const handleApiError = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  return "An unknown error occurred";
};
