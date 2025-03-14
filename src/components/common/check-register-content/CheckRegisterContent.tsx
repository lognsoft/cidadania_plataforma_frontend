"use client";
import React from "react";

interface CheckRegisterContentProps {
  label: string;
  children: React.ReactNode;
}

const CheckRegisterContent = ({
  label,
  children,
}: CheckRegisterContentProps) => {
  return (
    <div className="inline-flex border border-gray-light-primary h-[45px] px-[10px] rounded-lg">
      <div className="flex items-center gap-1">
        <span className="font-bold block">{label}</span>
        <span className="flex items-center gap-2">{children}</span>
      </div>
    </div>
  );
};

export default CheckRegisterContent;
