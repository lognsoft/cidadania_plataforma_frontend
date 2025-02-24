"use client";
import { usePathname } from "next/navigation";
import SelectLanguage from "../desktop/SelectLanguage";

const MobileSelectLanguage = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" && (
        <div className="md:hidden relative w-full bottom-0 left-0 z-[1000] bg-white">
          <div className="center">
            <div className="h-[3px] bg-gray-light-secondary rounded-full" />
            <div className="language py-7 max-w-[250px] mx-auto">
              <SelectLanguage />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileSelectLanguage;
