import { useState } from "react";
import CardRooteasy from "@/components/common/card-rooteasy/CardRooteasy";
import IRootEasy from "@/types/IRootEasyAdd";

interface RooteasyListProps {
  data: IRootEasy[];
  selectedCard: string | null;
  setSelectedCard: (value: string | null) => void;
}

function RooteasyList({
  data,
  selectedCard,
  setSelectedCard,
}: RooteasyListProps) {
  return (
    <div className="register-page more-before overflow-y-auto p-0 max-h-[380px]">
      {data.map((item) => (
        <CardRooteasy
          key={item.text}
          data={item}
          selected={selectedCard === item.icon}
          onSelect={() => setSelectedCard(item.icon)}
        />
      ))}
    </div>
  );
}

export default RooteasyList;
