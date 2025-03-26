import { PercentageBar } from "@/components/features/percentage-bar";
import { Separator } from "@/components/ui/separator";
import React from "react";

interface PendingSectionProps {
  title: string;
  percentage: number;
  items: string[];
}

const PendingSection: React.FC<PendingSectionProps> = ({
  title,
  percentage,
  items,
}) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-bold font-lilita text-[15px] font-default-tertiary">
            {title}
          </h2>
          <div className="ml-2" style={{ display: "inline-block" }}>
            <PercentageBar percentage={percentage} />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-[13px] font-poppins text-default-gray-ligth">
            Resolver
          </span>
          <img
            src="/images/icons/icone-alertas.svg"
            alt="Alerta"
            className="w-6 h-6"
          />
        </div>
      </div>
      <ul className="mt-4 mb-[14px] list-disc ml-6 text-default-gray-ligth">
        {items.map((item, index) => (
          <li
            key={index}
            className="text-[12px] font-poppins text-default-gray-ligth"
          >
            {item}
          </li>
        ))}
      </ul>
      <Separator className="my-4 border-t-4" />
    </>
  );
};

export default PendingSection;
