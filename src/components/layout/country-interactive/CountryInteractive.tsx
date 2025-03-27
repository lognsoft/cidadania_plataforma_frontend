// src/components/register/CountryInteractive.tsx
"use client";
import { useState } from "react";
import type ICountryCard from "@/types/ICounrtyCard";
import { CountryCard } from "@/components/common/card-country";

const countrys: ICountryCard[] = [
  {
    image: "/images/countrys/country-italy.svg",
    name: "Itália",
  },
  {
    image: "/images/countrys/country-spain.svg",
    name: "Espanha",
  },
  {
    image: "/images/countrys/country-usa.svg",
    name: "USA",
  },
];

const CountryInteractive = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  function handleSelect(countryName: string) {
    setSelectedCountry(countryName);
  }

  return (
    <div className="center">
      <div className="register-page grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-2">
        {countrys.map((country) => (
          <div className="flag px-[10px]" key={country.name}>
            <CountryCard
              country={country}
              selectedCountry={selectedCountry}
              onSelect={handleSelect}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryInteractive;
