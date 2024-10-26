"use client";

import Loading from "@/components/Loading";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { RedirectRouteService } from "@/service/RedirectRouteService";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const service = new RedirectRouteService(router, setLoading);
  const userInfo = localStorage.getItem("userInfo") || null;
  let data = userInfo ? JSON.parse(userInfo) : {};

  useEffect(() => {
    service.redirectToRoute();
    redirectStep(data.step);
  }, []);

  function redirectStep(step: number) {
    switch (step) {
      case 2:
        console.log("teste");

        break;

      default:
        break;
    }
  }

  // React.useEffect(() => {
  //   // routeService.redirectToRoute();
  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // if (!isMounted) {
  //   return <Loading />;
  // }

  // }, [router]);

  // if (loading) return <Loading />;

  return (
    <section className="page grid grid-cols-2 min-h-screen ">
      <div>lado login</div>
      <div>
        <Link href="register/country">
          <button className="p-10 bg-green-500">cadastrar</button>
        </Link>
      </div>
    </section>
  );
}
