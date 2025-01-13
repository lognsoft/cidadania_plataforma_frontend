"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";

import { type RootState, type AppDispatch } from "@/stores/store";
import { useSelector, useDispatch } from "react-redux";
import { updateState } from "@/stores/features/storeRegister";

export default function GenderPage(){
    const state = useSelector((rootState:RootState) => rootState.register);
    const dispatch = useDispatch<AppDispatch>();
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
        dispatch(updateState({
            register:{
                ...state.register,
                gender: gender
            }
        }));
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
                <div ref={ btnSubMenu } className="button sub-menu" data-select={(state.register.gender === "M" || state.register.gender === "F")}>
                    <div className="flex items-center gap-x-2">
                        <Image src="/images/icons/emoji-smile.svg" alt="" width={28} height={28}/>
                        <span>Sim, eu sei!</span>
                    </div>
                    <Icon icon="mi:chevron-down"/>
                    {toggle && (
                        <div className="sub-menu-options">
                            <div className="gender-option" onClick={() => handlerSelectGender("M")} data-select={state.register.gender === "M"}>Homem</div>
                            <div className="gender-option" onClick={() => handlerSelectGender("F")} data-select={state.register.gender === "F"}>Mulher</div>
                        </div>
                    )}
                </div>
                <div className="button" onClick={() => handlerSelectGender("IDK")} data-select={state.register.gender === "IDK"}>
                    <Image src="/images/icons/emoji-sad.svg" alt="" width={28} height={28}/>
                    <span>Eu não sei!</span>
                </div>
            </div>
        </>
    );
}