import React from "react";

interface PercentageBarProps {
  percentage: number;
}

const PercentageBar: React.FC<PercentageBarProps> = ({ percentage }) => {
  const getBackgroundColor = () => {
    if (percentage === 100) return "#019853";
    if (percentage >= 50) return "#CF9730";
    return "#B01A4F";
  };

  return (
    <div
      className="w-[34.51px] h-[15.1px] rounded-[6px] text-white text-[10px] font-bold font-poppins flex items-center justify-center"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      {percentage}%
    </div>
  );
};

export default PercentageBar;
