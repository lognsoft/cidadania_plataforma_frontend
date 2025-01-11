"use client";
import "@/styles/nextstep-component.css";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useGlobalState, type GlobalState } from "@/context/GlobalStates";

type DeepKeyOf<T> = T extends object ? { [K in keyof T]: `${K & string}` | `${K & string}.${DeepKeyOf<T[K]>}` }[keyof T] : never;

interface INextStepComponentProps{
    text:string;
    href:string;
    observable: DeepKeyOf<GlobalState> | string
}

const NextStepComponent = ({ text, href, observable}:INextStepComponentProps) => {
    const [disabled, setDisabled] = useState<boolean>(true);
    const { state } = useGlobalState();
    const route = useRouter();

    function navigateTo(): void {
        route.push(href);
    }

    useEffect(() => {
        const getValue = (obj: any, path: string) => {
            return path.split('.').reduce((acc, key) => acc && acc[key], obj);
        };
        const value = getValue(state, observable);
        if(value !== undefined && value !== ""){
            setDisabled(false);
            return;
        }
        setDisabled(true);
    },[state, observable]);

    return (
        <div className="next-step">
            <Button variant={ disabled ? 'disabled' : 'wine' } className="w-full max-w-[200px]" disabled={disabled} onClick={navigateTo}>{ text }</Button>
        </div>
    )
}

export default NextStepComponent;