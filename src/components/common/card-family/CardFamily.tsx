import DivSelected from "../div-selected/DivSelected";
import { ReactNode } from "react";

interface CardFamilyProps {
  percentage: number; // valor para calcular a cor do oval
  title: string;
  subtitle: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

const CardFamily = ({
  percentage,
  title,
  subtitle,
  selected = false,
  onClick,
  className = "",
}: CardFamilyProps) => {
  const getBackgroundColor = () => {
    if (percentage === 100) return "#019853";
    if (percentage >= 50) return "#CF9730";
    return "#B01A4F";
  };

  return (
    <DivSelected
      selected={selected}
      onClick={onClick}
      className={`relative w-[135px] h-[150px] rounded-xl cursor-pointer overflow-hidden ${className}`}
    >
      <div
        className="absolute top-2 right-2 w-[34.51px] h-[15.1px] rounded-[6px] text-white text-[10px] font-bold font-poppins flex items-center justify-center"
        style={{ backgroundColor: getBackgroundColor() }}
      >
        {percentage}%
      </div>

      {/* Conteúdo inferior esquerdo */}
      <div className="absolute bottom-3 left-3 text-left">
        <h3 className="text-[20px] font-bold font-lilita text-default-gray-text-bold leading-5">
          {title}
        </h3>
        <p className="text-[10px] font-poppins text-default-quaternary">
          {subtitle}
        </p>
      </div>
    </DivSelected>
  );
};

export default CardFamily;
