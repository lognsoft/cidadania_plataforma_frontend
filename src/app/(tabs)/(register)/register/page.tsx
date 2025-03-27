"use client";
import { useState } from "react";
import { RooteasyList } from "@/components/common/rooteasy-list";
import { DesktopAside } from "@/components/layout/desktop-aside";
import { FooterButtons } from "@/components/layout/footer-buttons";
import { rootesay_add } from "@/constants/CRootesayAdd";

function RegisterPage() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  return (
    <div className="center">
      <p className="text-center mb-7 md:hidden">
        Conta rapidinho, como você encontrou o Rooteasy?
      </p>
      <div className="grid-aside">
        <DesktopAside />
        <div className="content">
          <RooteasyList
            data={rootesay_add}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
          <FooterButtons isEnabled={!!selectedCard} />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
