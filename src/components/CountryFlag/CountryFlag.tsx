import React from "react";
import { CountryCode } from "../../types/models";
import {
  COUNTRY_POSITIONS,
  FLAG_DIMENSIONS,
} from "../../constants/countryPositions";
import "./CountryFlag.css";

// Props for the CountryFlag component
interface CountryFlagProps {
  countryCode: string;
  className?: string;
}

/**
 * Component to display a country's flag from a sprite image
 */
const CountryFlag: React.FC<CountryFlagProps> = ({
  countryCode,
  className = "",
}) => {
  // Calculate the background position based on the country code
  const getBackgroundPosition = (code: string): string => {
    const position = COUNTRY_POSITIONS[code as CountryCode];

    if (position === undefined) {
      console.warn(`No position found for country code: ${code}`);
      return "0 0"; // Default position if not found
    }

    // Calculate the position in the sprite (for vertically arranged flags)
    const yPosition = -(position * FLAG_DIMENSIONS.height);
    return `0 ${yPosition}px`;
  };

  return (
    <div
      className={`country-flag ${className}`}
      style={{
        width: `${FLAG_DIMENSIONS.width}px`,
        height: `${FLAG_DIMENSIONS.height}px`,
        backgroundImage: 'url("/flags.png")',
        backgroundPosition: getBackgroundPosition(countryCode),
      }}
      title={countryCode}
      role="img"
      aria-label={`Flag of ${countryCode}`}
    />
  );
};

export default CountryFlag;
