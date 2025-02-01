import CountryCard from "@/components/cards/country-card/CountryCard";
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
        <div className="center">
            <div className="register-page grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-2">
                {countrys.map((country) => (
                    <div className="flag px-[10px]" key={country.name}>
                        <CountryCard country={country}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CountryPage;