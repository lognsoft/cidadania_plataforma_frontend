"use client";
import { useRouter } from "next/navigation";
import DefaultButton from "../components/buttons/DefaultButton";
import React from "react";
import { useEffectRenderRedirectStep } from "./Service/useEffect/useEffectRenderRedirectStep";

export default function Home() {
  const router = useRouter();

  useEffectRenderRedirectStep();

  return (
    <section className="page h-screen grid grid-cols-2">
      <div></div>
      <div className="flex items-center w-full h-full">
        <DefaultButton eventClick={() => router.push("/register/country")}>
          Cadastrar
        </DefaultButton>
      </div>
    </section>
  );
}
