"use client";
import { useState } from "react";
import CardRooteasy from "@/components/common/card-rooteasy/CardRooteasy";
import IRootEasy from "@/types/IRootEasyAdd";

interface RooteasyListProps {
  data: IRootEasy[];
}

function RooteasyList({ data }: RooteasyListProps) {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  return (
    <div className="register-page more-before overflow-y-scroll p-0">
      {data.map((item) => (
        <div key={item.icon}>
          <CardRooteasy
            data={item}
            selected={selectedCard === item.icon}
            onSelect={() => setSelectedCard(item.icon)}
          />
        </div>
      ))}
    </div>
  );
}

export default RooteasyList;
