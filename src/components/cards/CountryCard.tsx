"use client";
import "@/styles/country-card-component.css";
import Image from "next/image";
import type ICountryCard from "@/types/ICounrtyCard";
import { type RootState, type AppDispatch } from "@/stores/store";
import { useSelector, useDispatch } from "react-redux";
import { updateState } from "@/stores/features/storeRegister";

const CountryCard = ({ country }:{ country:ICountryCard }) => {
    const state = useSelector((rootState:RootState) => rootState.register);
    const dispatch = useDispatch<AppDispatch>();

    function handleCountry(){
        dispatch(updateState({
            register:{
                ...state.register,
                country: country.name
            }
        }))
    }

    return (
        <div className="card-country" data-select={state.register.country === country.name} onClick={handleCountry}>
            <picture className="block">
                <Image className="image-country" src={country.image} width={135} height={121} alt={country.name}/>
            </picture>
            <h3>{ country.name }</h3>
        </div>
    )
}

export default CountryCard;