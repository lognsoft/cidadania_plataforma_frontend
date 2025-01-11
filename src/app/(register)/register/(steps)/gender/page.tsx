"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function GenderPage(){
    return (
        <>
            <div className="register-page grid grid-cols-2 gap-y-[21px] gap-x-[20px] font-bold">
                <div className="border flex items-center justify-between px-[10px] py-[7px] rounded-xl relative cursor-pointer">
                    <div className="flex items-center gap-x-2">
                        <Image src="/images/icons/emoji-smile.svg" alt="" width={28} height={28}/>
                        <span>Sim, eu sei!</span>
                    </div>
                    <Icon icon="mi:chevron-down"/>
                    <div className="absolute top-full w-full left-0 py-[9px] flex flex-col items-end gap-y-[9px]">
                        <div className="w-full max-w-[261px] rounded-xl border h-[42px] flex items-center justify-start px-[10px] cursor-pointer">Homem</div>
                        <div className="w-full max-w-[261px] rounded-xl border h-[42px] flex items-center justify-start px-[10px] cursor-pointer">Mulher</div>
                    </div>
                </div>
                <div className="flex items-center gap-x-2 rounded-xl px-[10px] py-[7px] border cursor-pointer">
                    <Image src="/images/icons/emoji-sad.svg" alt="" width={28} height={28}/>
                    <span>Eu não sei!</span>
                </div>
            </div>
        </>
    );
}