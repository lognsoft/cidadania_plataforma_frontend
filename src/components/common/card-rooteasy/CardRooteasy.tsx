"use client";
import { HTMLAttributes } from "react";
import type IRootEasy from "@/types/IRootEasyAdd";
import Image from "next/image";
import "./root-easy-component.css";

interface CardRooteasyProps extends HTMLAttributes<HTMLDivElement> {
  data: IRootEasy;
  className?: string;
}

const CardRooteasy = ({ data, className = "" }: CardRooteasyProps) => {
  return (
    <div className={`card-rooteasy ${className}`}>
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
