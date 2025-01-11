import Image from "next/image";

const kinshipOptions:{title:string, subtitle:string}[] = [
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
            <div className="register-page grid grid-cols-4 gap-y-[21px] gap-x-2">
                {/* {countrys.map((country) => (
                    <div className="flag" key={country.name}>
                        <CountryCard country={country}/>
                    </div>
                ))} */}
                {kinshipOptions.map((kinship) => (
                    <div key={kinship.title}>
                        <div className="mx-auto flex flex-col gap-y-2 justify-center w-full max-w-[138px] min-h-[108px] border px-[13px] py-[14px] rounded-lg cursor-pointer">
                            <figure>
                                <Image src="/images/icons/icon-bullet.svg" alt="" width={22} height={22}/>
                            </figure>
                            <div>
                                <h4 className="font-lilita text-twenty">{ kinship.title }</h4>
                                <span className="text-mini block -mt-1 font-bold text-gray-3">{ kinship.subtitle }</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}