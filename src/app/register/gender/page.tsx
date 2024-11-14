"use client";
import React from "react";
import Gender from "./components/SelectGender/SelectGender";
import { useEffectUpdateStepLocalStorage } from "../../useEffects/useEffectUpdateStepLocalStorage";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  useEffectUpdateStepLocalStorage(3);
  return (
    <div className="h-[80vh]">
      <Gender />
    </div>
  );
};

export default page;
