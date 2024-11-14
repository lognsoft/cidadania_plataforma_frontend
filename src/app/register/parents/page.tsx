"use client";

import React from "react";
import ParentsOptions from "./components/ParentsOptions";
import ButtonBack from "@/app/components/buttons/ButtonBack";
import { useEffectUpdateStepLocalStorage } from "../../useEffects/useEffectUpdateStepLocalStorage";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  useEffectUpdateStepLocalStorage(4);
  return (
    <div className="h-[80vh]">
      <ParentsOptions />
    </div>
  );
};

export default page;
