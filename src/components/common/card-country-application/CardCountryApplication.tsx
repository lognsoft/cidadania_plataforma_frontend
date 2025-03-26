import React from "react";
import { PercentageBar } from "@/components/features/percentage-bar";
import DivSelected from "../div-selected/DivSelected";

interface CardCountryApplicationProps {
  percentage: number;
  title: string;
  subtitle: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
  icon?: string;
}

const CardCountryApplication: React.FC<CardCountryApplicationProps> = ({
  percentage,
  title,
  subtitle,
  selected = false,
  onClick,
  className = "",
  icon,
}: CardCountryApplicationProps) => {
  return (
    <DivSelected
      selected={selected}
      onClick={onClick}
      className={`relative w-[135px] h-[100px] rounded-xl cursor-pointer overflow-hidden ${className}`}
    >
      <PercentageBar percentage={percentage} />
      <div className="absolute left-3 top-[25px] bottom-[12px] flex flex-col justify-between text-left">
        <div className="flex flex-col gap-[3px]">
          {icon && (
            <img
              src={icon}
              alt="icon-country"
              className="w-[27px] h-[22px] block"
            />
          )}
          <h3 className="text-[20px] font-bold font-lilita text-default-gray-text-bold leading-1">
            {title}
          </h3>
        </div>
        <p className="text-[10px] font-poppins text-default-quaternary">
          {subtitle}
        </p>
      </div>
    </DivSelected>
  );
};

export default CardCountryApplication;
