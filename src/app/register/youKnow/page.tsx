"use client";
import React, { useEffect } from "react";
import Know from "./components/KnowDecision/KnowDecision";
import ButtonBack from "@/app/components/buttons/ButtonBack";
import { GetCountryLocalStorage } from "./components/KnowDecision/Services/GetCountryLocalStorage";
const page = () => {
  return (
    <div className="h-[80vh]">
      <Know />
     
    </div>
  );
};

export default page;
