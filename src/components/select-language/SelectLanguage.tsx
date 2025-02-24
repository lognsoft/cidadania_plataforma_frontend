"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "../ui/select";

const SelectLanguage = () => {
  return (
    <div className="flex items-center gap-x-3 font-semibold text-gray-primary">
      <div>Linguagem:</div>
      <Select value={"portuguese"} onValueChange={() => {}}>
        <SelectTrigger className="min-w-[130px] border-0 shadow-none outline-none focus:ring-0 text-base font-semibold p-0 text-gray-primary">
          <SelectValue placeholder="Idioma" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="portuguese">Português (BR)</SelectItem>
          <SelectItem value="english">Inglês</SelectItem>
          <SelectItem value="franch">Francês</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectLanguage;
