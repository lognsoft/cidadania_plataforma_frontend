"use client";

import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { RedirectRouteService } from "@/service/RedirectRouteService";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const userInfoString = localStorage.getItem("userInfo");
    const userInfo = userInfoString ? JSON.parse(userInfoString) : {};

    const redirectRouteCountryService = new RedirectRouteService(router, setLoading, userInfo);

    redirectStepRoute(userInfo.step, redirectRouteCountryService);
  }, [router]);

  const redirectStepRoute = useCallback((step: number, redirectRouteService: RedirectRouteService) => {
    switch (step) {
      // País já selecionado
      case 2:
        redirectRouteService.redirectToRoute();
        break;
      //Precisa criar os outros steps./ Voce vai criar aqui.
      default:
        setLoading(false); // Finaliza o carregamento se nao houver redirecionamento
        break;
    }
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <section className="page grid grid-cols-2 min-h-screen">
      <div>lado login</div>
      <div>
        <Link href="register/country">
          <button className="p-10 bg-green-500">Cadastrar</button>
        </Link>
      </div>
    </section>
  );
}
