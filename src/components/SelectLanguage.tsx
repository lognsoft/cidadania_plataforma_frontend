"use client";
import { useState } from "react";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "./ui/select"
import { useSelector, useDispatch } from "react-redux";
import { type AppDispatch, type RootState } from "@/stores/store";
import { updateLanguage } from "@/stores/features/storeLanguage";

const SelectLanguage = () => {
    const language = useSelector((rootState:RootState) => rootState.translate.language);
    const dispatch = useDispatch<AppDispatch>();
    // const [language, setLanguage] = useState<string>("portuguese");

    function teste(lang:string){
        dispatch(updateLanguage(lang));
    }

    return (
        <div className="flex items-center gap-x-3 font-semibold text-gray">
            <div>Linguagem:</div>
            <Select value={language} onValueChange={teste}>
                <SelectTrigger className="min-w-[130px] border-0 shadow-none outline-none focus:ring-0 text-base font-semibold p-0 text-gray">
                    <SelectValue placeholder="Idioma"/>
                </SelectTrigger>
                <SelectContent className="bg-white">
                    <SelectItem value="portuguese">Português (BR)</SelectItem>
                    <SelectItem value="english">Inglês</SelectItem>
                    <SelectItem value="franch">Francês</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default SelectLanguage;