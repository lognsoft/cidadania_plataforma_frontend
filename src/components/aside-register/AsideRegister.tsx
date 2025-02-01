"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import type IAsideRegister from "@/types/IAsideRegister";
import { stepsAside as steps } from "@/constants/CAsideRegister";
import "@/components/aside-register/aside-register-component.css";

const AsideRegister = () => {
    const [step, setStep] = useState<IAsideRegister>(steps[0]);
    const pathname = usePathname();

    useEffect(() => {
        const newStep:IAsideRegister | undefined = steps.find((step) => {
            if(step.path === pathname){
                return step;
            }
        })
        if(newStep !== undefined) setStep(newStep);
    }, [pathname]);

    return (
        <>
            <div className="header-title-page">
                <picture>
                    <Image className="w-full h-auto" src={step.image} width={step.width} height={step.height} alt="" priority/>
                </picture>
                <h1>{ step.title }</h1>
            </div>
            <div className="title-page">
                <picture>
                    <Image className="w-auto h-auto" src={step.image} width={step.width} height={step.height} alt="" priority/>
                </picture>
                <h1>{ step.title }</h1>
            </div>
        </>
    )
}

export default AsideRegister;