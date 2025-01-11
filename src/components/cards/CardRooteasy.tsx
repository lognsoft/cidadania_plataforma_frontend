"use client";
import { HTMLAttributes } from "react"
import type IRootEasy from "@/types/IRootEasyAdd";
import Image from "next/image";
import "@/styles/root-easy-component.css";
import { useGlobalState } from "@/context/GlobalStates";

interface CardRooteasyProps extends HTMLAttributes<HTMLDivElement>{
    data: IRootEasy,
    className?: string,
}

const CardRooteasy = ({ data, className = '', ...props }:CardRooteasyProps) => {
    const { state, updateState } = useGlobalState();

    function HowDidYouFind(){
        updateState({
            howDidYouFind: data.text
        })
    }

    return (
        <div className={`card-rooteasy ${className}`} onClick={HowDidYouFind} data-select={ state.howDidYouFind === data.text } { ...props }>
            <picture>
                <Image src={data.icon} width={data.width} height={data.height} alt={data.text} priority/>
            </picture>
            <h3 className="font-semibold">{ data.text }</h3>
        </div>
    )
}

export default CardRooteasy