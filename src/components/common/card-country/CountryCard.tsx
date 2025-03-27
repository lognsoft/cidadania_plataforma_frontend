"use client";
import Image from "next/image";
import ICountryCard from "@/types/ICounrtyCard";
import DivSelected from "../div-selected/DivSelected";
import "./country-card-component.css";

interface CountryCardProps {
  country: ICountryCard;
  selectedCountry: string;
  onSelect: (countryName: string) => void;
}

const CountryCard = ({
  country,
  selectedCountry,
  onSelect,
}: CountryCardProps) => {
  function handleCountry() {
    onSelect(country.name);
  }

  return (
    <DivSelected
      className="card-country"
      selected={selectedCountry === country.name}
      onClick={handleCountry}
    >
      <picture>
        <Image
          className="image-country"
          src={country.image}
          width={135}
          height={121}
          alt={country.name}
        />
      </picture>
      <div className="text-container">
        <h3>{country.name}</h3>
      </div>
    </DivSelected>
  );
};

export default CountryCard;
