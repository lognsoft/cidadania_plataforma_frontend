import { PercentageBar } from "@/components/features/percentage-bar";
import DivSelected from "../div-selected/DivSelected";

interface CardFamilyProps {
  percentage: number;
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

  return (
    <DivSelected
      selected={selected}
      onClick={onClick}
      className={`relative w-[135px] h-[100px] rounded-xl cursor-pointer overflow-hidden ${className}`}
    >
      <div className="absolute top-2 right-2">
        <PercentageBar percentage={percentage} />
      </div>
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
