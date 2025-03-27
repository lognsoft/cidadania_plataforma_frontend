// src/app/(tabs)/(register)/register/country/page.tsx
import { CountryInteractive } from "@/components/layout/country-interactive";
import { StepRoot } from "@/components/layout/step-root";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Country",
};

const CountryPage = () => {
  return <CountryInteractive />;
};

export default CountryPage;
