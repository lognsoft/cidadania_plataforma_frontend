"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import { useGlobalState } from "@/context/GlobalStates";

export default function GenderPage(){
    const { state, updateState } = useGlobalState();
    const btnSubMenu = useRef<HTMLDivElement | null>(null);
    const [toggle, setToggle] = useState<boolean>(false);

    function handlerGenderToggle(e:MouseEvent){
        const el:HTMLElement = e.target as HTMLElement;

        if (btnSubMenu.current && (el === btnSubMenu.current || btnSubMenu.current.contains(el))) {
            setToggle((prev) => !prev);
        } else {
            setToggle(false); // Fecha o submenu se o clique foi fora
        }
        
    }

    function handlerSelectGender(gender:"M" | "F" | "IDK"){
        updateState({
            register:{
                ...state.register,
                gender: gender
            }
        });
    }

    useEffect(() => {
        document.addEventListener("click", handlerGenderToggle)
        return () => {
            document.removeEventListener("click", handlerGenderToggle);
        }
    },[]);

    return (
        <>
            <div className="register-page gender">
                <div ref={ btnSubMenu } className="button sub-menu">
                    <div className="flex items-center gap-x-2">
                        <Image src="/images/icons/emoji-smile.svg" alt="" width={28} height={28}/>
                        <span>Sim, eu sei!</span>
                    </div>
                    <Icon icon="mi:chevron-down"/>
                    {toggle && (
                        <div className="sub-menu-options">
                            <div className="gender-option" onClick={() => handlerSelectGender("M")}>Homem</div>
                            <div className="gender-option" onClick={() => handlerSelectGender("F")}>Mulher</div>
                        </div>
                    )}
                </div>
                <div className="button" onClick={() => handlerSelectGender("IDK")}>
                    <Image src="/images/icons/emoji-sad.svg" alt="" width={28} height={28}/>
                    <span>Eu não sei!</span>
                </div>
            </div>
        </>
    );
}