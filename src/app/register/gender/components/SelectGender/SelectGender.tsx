"use client";

import React from "react";
import { SaveGenderLocalStorage } from "./services/SaveGenderLocalStorage";
import { useRouter } from "next/navigation";
import ButtonBack from "@/app/components/buttons/ButtonBack";

const SelectGender = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center gap-10 items-center h-full">
      <div>
        <h1 className="text-xl">Qual é o gênero?</h1>
      </div>
      <div className="flex gap-10 justify-center ">
        <button
          className="bg-blue-500 rounded-2xl p-10 text-xl text-white"
          onClick={() => SaveGenderLocalStorage(0, router)}
        >
          homem
        </button>
        <button
          className="bg-pink-500 rounded-2xl p-10 text-xl text-white"
          onClick={() => SaveGenderLocalStorage(1, router)}
        >
          mulher
        </button>
      </div>
      <ButtonBack />
    </div>
  );
};

export default SelectGender;
