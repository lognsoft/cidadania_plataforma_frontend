"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";

import { type RootState, type AppDispatch } from "@/stores/store";
import { useSelector, useDispatch } from "react-redux";
import { updateState } from "@/stores/features/storeRegister";
import { type RegisterState } from "@/stores/features/storeRegister";

type TypeGender = RegisterState['register']['gender'];

export default function GenderPage(){
    const state = useSelector((rootState:RootState) => rootState.register);
    const dispatch = useDispatch<AppDispatch>();

    const [gender, setGender] = useState<TypeGender>(undefined);
    const [toggle, setToggle] = useState<boolean>(false);

    function handlerOpenOptionGenre(){
        setToggle(true);
    }

    function handlerSelectGender(char:TypeGender){
        dispatch(updateState({
            register:{
                ...state.register,
                gender: char
            }
        }))
    }

    useEffect(() => {
        setGender(state.register.gender);
        if(state.register.gender === "F" || state.register.gender === "M"){
            setToggle(true);
        } else {
            setToggle(false);
        }
    },[state.register.gender])

    return (
        <>
            <div className="register-page gender">
                <div className="button sub-menu" onClick={handlerOpenOptionGenre} data-select={(gender === "M" || gender === "F")}>
                    <div className="flex items-center gap-x-2">
                        <Image src="/images/icons/emoji-smile.svg" alt="" width={28} height={28}/>
                        <span>Sim, eu sei!</span>
                    </div>
                    <Icon icon="mi:chevron-down"/>
                    {toggle && (
                        <div className="sub-menu-options">
                            <div className="gender-option" onClick={() => handlerSelectGender("M")} data-select={gender === "M"}>Homem</div>
                            <div className="gender-option" onClick={() => handlerSelectGender("F")} data-select={gender === "F"}>Mulher</div>
                        </div>
                    )}
                </div>
                <div className="button" onClick={() => handlerSelectGender("IDK")} data-select={gender === "IDK"}>
                    <Image src="/images/icons/emoji-sad.svg" alt="" width={28} height={28}/>
                    <span>Eu não sei!</span>
                </div>
            </div>
        </>
    );
}