"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectLanguage = () => {
  const [language, setLanguage] = useState("portuguese");

  return (
    <div className="flex items-center gap-x-3 font-semibold text-default-gray-ligth">
      <div>Linguagem:</div>
      <Select value={language} onValueChange={setLanguage}>
        <SelectTrigger className="min-w-[130px] border-0 shadow-none outline-none focus:ring-0 text-base font-semibold p-0 text-text-default-quinary">
          <SelectValue placeholder="Idioma" />
        </SelectTrigger>
        <SelectContent className="bg-white z-[1100]">
          <SelectItem value="portuguese">Português (BR)</SelectItem>
          <SelectItem value="english">Inglês</SelectItem>
          <SelectItem value="franch">Francês</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectLanguage;
