import { CountryCode } from "../types/models";

// The flags are arranged vertically in alphabetical order by country code
export const COUNTRY_POSITIONS: Record<CountryCode, number> = {
  AUT: 0,
  BLR: 1,
  CAN: 2,
  CHN: 3,
  FRA: 4,
  GER: 5,
  ITA: 6,
  NED: 7,
  NOR: 8,
  RUS: 9,
  SUI: 10,
  SWE: 11,
  USA: 12,
};

// Dimensions of each flag in the sprite
export const FLAG_DIMENSIONS = {
  width: 28,
  height: 17,
};
