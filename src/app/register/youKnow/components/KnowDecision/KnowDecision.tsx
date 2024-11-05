"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { SaveKnowDecisionLocalStorage } from "./Services/SaveKnowDecisionLocalStorage";
import { GetCountryLocalStorage } from "./Services/GetCountryLocalStorage";
import ButtonBack from "@/app/components/buttons/ButtonBack";

const KnowDecision = () => {
  const router = useRouter();

  const handleDecision = (know: boolean) => {
    SaveKnowDecisionLocalStorage(know);

    if (know) {
      router.push("/register/gender");
    } else {
      router.push("/arvore");
    }
  };

  // remover
  let country = GetCountryLocalStorage();
  console.log(country);

  return (
    <div className="flex flex-col gap-10 justify-center items-center h-full">
      <h1 className="text-xl">Voce conhece o {country}?</h1>

      <div className="flex gap-10 ">
        <button
          className="bg-[#FF4B4B] rounded-2xl py-5 px-20 text-xl text-white"
          onClick={() => handleDecision(true)}
        >
          Sim
        </button>
        <button
          className="bg-[#FF4B4B] rounded-2xl py-5 px-20 text-xl text-white"
          onClick={() => handleDecision(false)}
        >
          Nao
        </button>
      </div>
      <ButtonBack />
    </div>
  );
};

export default KnowDecision;
