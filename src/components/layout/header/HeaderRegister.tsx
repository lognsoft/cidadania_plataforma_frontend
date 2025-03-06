"use client";
import Link from "next/link";
import Image from "next/image";
import "./header-component.css";
import { usePathname } from "next/navigation";
import { SelectLanguage } from "@/components/features/language-selection";
import { MobileHeader } from "../mobile-header";

const HeaderRegister = () => {
  const path = usePathname();

  return (
    <header
      id="default-header"
      className={path !== "/" ? "mobile-response" : ""}
    >
      <div className="center">
        <nav className="header-container">
          <Link href="/">
            {path !== "/" && (
              <>
                <div className="flex flex-col items-center">
                  <Image
                    className="w-auto h-auto md:hidden"
                    src="/images/logo-responsive.svg"
                    width="48"
                    height="62"
                    alt="logomarca"
                    priority
                  />
                  <MobileHeader />
                </div>
              </>
            )}
            <Image
              className={`w-auto h-auto${
                path !== "/" ? " hidden md:inline-block" : ""
              }`}
              src="/images/logo.svg"
              width="156"
              height="66"
              alt="logomarca"
              priority
            />
          </Link>
          <div className="hidden md:block relative -z-20">
            <SelectLanguage />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderRegister;
