"use client";
import "@/components/cards/country-card/country-card-component.css";
import Image from "next/image";
import type ICountryCard from "@/types/ICounrtyCard";
import { useSelector, useDispatch } from "react-redux";
import { type RootState, type AppDispatch } from "@/stores/store";
import { updateState } from "@/stores/features/storeRegister";

const CountryCard = ({ country }: { country: ICountryCard }) => {
  const state = useSelector((rootState: RootState) => rootState.register);
  const dispatch = useDispatch<AppDispatch>();

  function handleCountry() {
    dispatch(
      updateState({
        register: {
          ...state.register,
          country: country.name,
        },
      })
    );
  }

  return (
    <div
      className="card-country z-10"
      data-select={state.register.country === country.name}
      onClick={handleCountry}
    >
      <picture>
        <Image
          className="image-country z-100"
          src={country.image}
          width={135}
          height={121}
          alt={country.name}
        />
      </picture>
      <h3>{country.name}</h3>
    </div>
  );
};

export default CountryCard;
