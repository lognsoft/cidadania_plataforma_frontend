"use client";
import { useState } from "react";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "./ui/select"

const selectLanguage = () => {
    const [language, setLanguage] = useState<string>("portuguese");
    return (
        <div className="flex items-center gap-x-3 font-semibold text-gray">
            <div>Linguagem:</div>
            <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="min-w-[130px] border-0 shadow-none outline-none focus:ring-0 text-base font-semibold p-0 text-gray">
                    <SelectValue placeholder="Idioma"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="portuguese">Português (BR)</SelectItem>
                    <SelectItem value="english">Inglês</SelectItem>
                    <SelectItem value="franch">Francês</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default selectLanguage;