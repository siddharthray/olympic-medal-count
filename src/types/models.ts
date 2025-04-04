// Medal data interface
export interface Medal {
  code: string;
  gold: number;
  silver: number;
  bronze: number;
}

// Medal with total count added
export interface MedalWithTotal extends Medal {
  total: number;
}

// Sort types for medal table
export type SortType = "gold" | "silver" | "bronze" | "total";

// Country flag dimensions
export interface FlagDimensions {
  width: number;
  height: number;
}

// Country code type for type safety
export type CountryCode =
  | "AUT"
  | "BLR"
  | "CAN"
  | "CHN"
  | "FRA"
  | "GER"
  | "ITA"
  | "NED"
  | "NOR"
  | "RUS"
  | "SUI"
  | "SWE"
  | "USA";
