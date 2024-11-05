"use client";
import React, { useEffect } from "react";
import CountryCard from "./components/CountryCard";
import { useEffectCreateLocalStorage } from "./useEffects/useEffectCreateLocalStorage";

const Page = () => {
  //UseEffects
  useEffectCreateLocalStorage();

  return (
    <div className="flex flex-col gap-10 justify-center items-center h-[80vh]">
      <div>
        <h1 className="text-xl">Qual cidadania você gostaria de obter?</h1>
      </div>
      <div className="flex gap-10 justify-center">
        <CountryCard children="italiano" />
        <CountryCard children="brasileiro" />
        <CountryCard children="argentino" />
      </div>
    </div>
  );
};

export default Page;
