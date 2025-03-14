"use client";
import React from "react";
import Image from "next/image";

interface IconButtonProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  onClick?: () => void;
  className?: string;
}

const IconButton = ({
  src,
  alt,
  width = 30,
  height = 28,
  onClick,
  className = "w-auto",
}: IconButtonProps) => {
  return (
    <button onClick={onClick}>
      <Image
        className={className}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </button>
  );
};

export default IconButton;
