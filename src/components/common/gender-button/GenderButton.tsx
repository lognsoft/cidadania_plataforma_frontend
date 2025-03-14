"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import DivSelected from "../div-selected/DivSelected";

interface GenderButtonProps {
  icon?: string;
  alt?: string;
  label: string;
  selected?: boolean;
  onClick: () => void;
  hasChevron?: boolean;
  className?: string;
}

const GenderButton = ({
  icon,
  alt,
  label,
  selected = false,
  onClick,
  hasChevron = false,
  className = "",
}: GenderButtonProps) => {
  return (
    <DivSelected selected={selected} onClick={onClick} className={className}>
      <div className="flex items-center gap-x-2">
        {icon && <Image src={icon} alt={alt ?? label} width={28} height={28} />}
        <span>{label}</span>
        {hasChevron && (
          <Icon icon="mi:chevron-down" style={{ color: "#E02D6C" }} />
        )}
      </div>
    </DivSelected>
  );
};

export default GenderButton;
