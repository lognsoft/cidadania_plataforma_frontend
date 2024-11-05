"use client";

import React from "react";
import { SaveParentLocalStorage } from "./service/SaveParentLocalStorage";
import { CheckParentGender } from "./service/CheckParentGender";
import { useRouter } from "next/navigation";
import ButtonBack from "@/app/components/buttons/ButtonBack";

const ParentsOptions = () => {
  const router = useRouter();
  let parentsGender = CheckParentGender();

  return (
    <div className="flex flex-col items-center justify-center h-full gap-10">
      <div></div>
      <div className="flex justify-center gap-10 items-center">
        {parentsGender &&
          parentsGender.map((parent) => (
            <button
              className="bg-green-400 rounded-2xl p-10 text-xl text-white"
              key={parent}
              onClick={() => SaveParentLocalStorage(parent, router)}
            >
              {parent}
            </button>
          ))}
      </div>
      <ButtonBack />
    </div>
  );
};

export default ParentsOptions;
