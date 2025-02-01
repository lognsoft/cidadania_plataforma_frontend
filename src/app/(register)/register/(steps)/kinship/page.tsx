import Image from "next/image";
import type IKinshipCard from "@/types/IKinshipCard";
import KinshipCard from "@/components/cards/kinship-card/KinshipCard";

const kinshipOptions:IKinshipCard[] = [
    {
        title: 'Trisavô',
        subtitle: 'Pai do seu Bisavô'
    },
    {
        title: 'Bisavô',
        subtitle: 'Pai do seu Avô'
    },
    {
        title: 'Avô',
        subtitle: 'Pai do seu Pai'
    },
    {
        title: 'Pai',
        subtitle: 'Seu pai'
    },
    {
        title: 'Não sei',
        subtitle: 'Preciso descobrir'
    }
];

export default function PageKinship(){
    return (
        <>
            <div className="register-page grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-[21px] gap-x-2">
                {/* {countrys.map((country) => (
                    <div className="flag" key={country.name}>
                        <CountryCard country={country}/>
                    </div>
                ))} */}
                {kinshipOptions.map((kinship) => (
                    <div key={kinship.title}>
                        <KinshipCard key={kinship.title} kinship={kinship}/>
                    </div>
                ))}
            </div>
        </>
    )
}