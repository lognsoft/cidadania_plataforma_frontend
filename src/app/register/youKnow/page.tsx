"use client";
import React, { useEffect } from "react";
import Know from "./components/KnowDecision/KnowDecision";
import ButtonBack from "@/app/components/buttons/ButtonBack";
import { GetCountryLocalStorage } from "./components/KnowDecision/Services/GetCountryLocalStorage";
import { useEffectUpdateStepLocalStorage } from "../../useEffects/useEffectUpdateStepLocalStorage";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();

  useEffectUpdateStepLocalStorage(2);
  return (
    <div className="h-[80vh]">
      <Know />
    </div>
  );
};

export default page;
