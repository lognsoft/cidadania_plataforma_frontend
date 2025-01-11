import CountryCard from "@/components/cards/CountryCard";
import type { Metadata } from "next";
import type ICountryCard from "@/types/ICounrtyCard";

export const metadata:Metadata = {
    title: 'Country'
}

const countrys:ICountryCard[] = [
    {
        image: '/images/countrys/country-italy.svg',
        name: 'Itália'
    },
    {
        image: '/images/countrys/country-spain.svg',
        name: 'Espanha',
    },
    {
        image: '/images/countrys/country-usa.svg',
        name: 'USA'
    }
]

const CountryPage = () => {
    return (
        <>
            <div className="register-page grid grid-cols-3 gap-y-[21px] gap-x-2">
                {countrys.map((country) => (
                    <div className="flag" key={country.name}>
                        <CountryCard country={country}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CountryPage;