"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ButtonBack = () => {
  const router = useRouter();
  return (
    <button
      className="bg-white  border-green-400 border-2 rounded-2xl py-5 px-20 text-xl text-black"
      onClick={() => router.back()}
    >
      voltar
    </button>
  );
};

export default ButtonBack;
