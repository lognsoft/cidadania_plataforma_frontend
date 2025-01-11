"use client";
import Image from "next/image";
import type ICountryCard from "@/types/ICounrtyCard";

const CountryCard = ({ country }:{ country:ICountryCard }) => {
    return (
        <div className="w-full max-w-[184px] min-h-[188px] rounded-2xl border mx-auto">
            <picture className="block">
                <Image className="left-[50%] -translate-x-[50%] -translate-y-[19px] relative inline-block" src={country.image} width={135} height={121} alt={country.name}/>
            </picture>
            <h3 className="font-bold text-center">{ country.name }</h3>
        </div>
    )
}

export default CountryCard;