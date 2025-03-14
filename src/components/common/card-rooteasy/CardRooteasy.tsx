"use client";
import { HTMLAttributes } from "react";
import type IRootEasy from "@/types/IRootEasyAdd";
import Image from "next/image";
import "./root-easy-component.css";
import DivSelected from "../div-selected/DivSelected";

interface CardRooteasyProps extends HTMLAttributes<HTMLDivElement> {
  data: IRootEasy;
  variant?: "green" | "red";
  className?: string;
  selected?: boolean;
  shadow?: boolean;
  colorShadow?: boolean;
  onSelect?: () => void;
}

const CardRooteasy = ({
  data,
  className = "",
  selected = false,
  variant = "green",
  shadow = false,
  colorShadow = false,
  onSelect,
}: CardRooteasyProps) => {
  return (
    <DivSelected
      colorShadow={colorShadow}
      shadow={shadow}
      selected={selected}
      className={className}
      variant={variant}
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
    </DivSelected>
  );
};

export default CardRooteasy;
