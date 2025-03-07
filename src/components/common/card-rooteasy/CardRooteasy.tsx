"use client";
import { HTMLAttributes } from "react";
import type IRootEasy from "@/types/IRootEasyAdd";
import Image from "next/image";
import "./root-easy-component.css";

interface CardRooteasyProps extends HTMLAttributes<HTMLDivElement> {
  data: IRootEasy;
  className?: string;
  selected?: boolean;
  onSelect?: () => void;
}

const CardRooteasy = ({
  data,
  className = "",
  selected = false,
  onSelect,
}: CardRooteasyProps) => {
  return (
    <div
      data-select={selected}
      className={`card-rooteasy ${className}`}
      onClick={onSelect}
      tabIndex={0}
    >
      <picture>
        <Image
          src={data.icon}
          width={data.width}
          height={data.height}
          alt={data.text}
          priority
        />
      </picture>
      <h3 className="font-semibold">{data.text}</h3>
    </div>
  );
};

export default CardRooteasy;
