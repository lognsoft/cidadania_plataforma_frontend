"use client";
import React from "react";

const DefaultButton = ({
  eventClick,
  children,
}: {
  eventClick: () => void;
  children: string;
}) => {
  return (
    <button
      onClick={eventClick}
      className="bg-[#FF4B4B] rounded-2xl py-5 px-20 text-xl text-white"
    >
      {children}
    </button>
  );
};

export default DefaultButton;
