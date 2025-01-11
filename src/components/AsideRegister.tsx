"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const steps:{ path:string, image:string, title:string, height:number, width:number }[] = [
    {
        path: '/register/country',
        image: '/images/step-flag.svg',
        title: 'Qual o País que você deseja tirar a cidadania?',
        width: 118,
        height: 94
    },
    {
        path: '/register/gender',
        image: '/images/step-gender.svg',
        title: 'Você sabe qual é o sexo da sua descendência?',
        width: 136,
        height: 92
    },
    {
        path: '/register/kinship',
        image: '/images/step-kinship.svg',
        title: 'Qual é o grau de parentesco?',
        width: 100,
        height: 104
    }
];

const AsideRegister = () => {
    const [step, setStep] = useState<{ path:string, image:string, title:string, height:number, width:number }>(steps[0]);
    const pathname = usePathname();

    useEffect(() => {
        const newStep:{ path:string, image:string, title:string, height:number, width:number } | undefined = steps.find((step) => {
            if(step.path === pathname){
                return step;
            }
        })
        if(newStep !== undefined) setStep(newStep);
    }, [pathname]);

    return (
        <aside>
            <picture>
                <Image className="w-auto" src={step.image} width={step.width} height={step.height} alt="" priority/>
            </picture>
            <h1>{ step.title }</h1>
        </aside>
    )
}

export default AsideRegister;