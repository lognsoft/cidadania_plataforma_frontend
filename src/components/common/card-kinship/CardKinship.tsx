"use client";
import type IKinshipCard from "@/types/IKinshipCard";
import { BulletKinship } from "../bullet-kinship";
import "./card-kinship-component.css";

interface KinshipCardProps {
  kinship: IKinshipCard;
  selected?: boolean;
  onSelect: () => void;
}

const KinshipCard = ({
  kinship,
  selected = false,
  onSelect,
}: KinshipCardProps) => {
  return (
    <div className="kinship-card" data-select={selected} onClick={onSelect}>
      <BulletKinship check={selected} />
      <div>
        <h4 className="font-lilita text-twenty">{kinship.title}</h4>
        <span className="text-mini block -mt-1 font-bold text-default-quaternary">
          {kinship.subtitle}
        </span>
      </div>
    </div>
  );
};

export default KinshipCard;
