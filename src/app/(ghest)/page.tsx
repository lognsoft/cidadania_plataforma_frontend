"use client";

import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { RedirectRouteService } from "@/app/(ghest)/service/RegisterUser/RedirectRouteService";
import { ReloadLastPageAccessService } from "./service/RegisterUser/ReloadLastPageAcessService";
import { FormLogin } from "@/components/FormLogin";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  const redirectStepRoute = useCallback((step: number, redirectRouteService: RedirectRouteService, userInfo: any) => {
    const reloadLastPageAccessService = new ReloadLastPageAccessService();
    reloadLastPageAccessService.reloadLastPage(step, redirectRouteService, userInfo, setLoading);
  }, []);

  useEffect(() => {
    const userInfoString = localStorage.getItem("userInfo");
    const userInfo = userInfoString ? JSON.parse(userInfoString) : {};

    const redirectRouteCountryService = new RedirectRouteService(router, setLoading);

    redirectStepRoute(userInfo.step, redirectRouteCountryService, userInfo);

  }, [router, redirectStepRoute]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <section className="page grid grid-cols-2 min-h-screen bg-purple-500">
      <FormLogin /> 
      <div>
        <Link href="register/country">
          <button className="p-10 bg-green-500">Cadastrar</button>
        </Link>
      </div>
    </section>
  );
}
