import React from "react";
import { SaveCountryLocalStorage } from "./services/SaveCountryLocalStorage";
import { useRouter } from "next/navigation";
const CountryCard = ({ children }: { children: string }) => {
  const router = useRouter();
  return (
    <div>
      <button
        className="bg-[#FF4B4B] rounded-2xl p-10 text-xl text-white"
        onClick={() => {
          SaveCountryLocalStorage(children, router);
        }}
      >
        {children}
      </button>
    </div>
  );
};

export default CountryCard;
