"use client";
import { HTMLAttributes } from "react";
import type IRootEasy from "@/types/IRootEasyAdd";
import Image from "next/image";
import "@/components/cards/card-rooteasy/root-easy-component.css";
import { useSelector, useDispatch } from "react-redux";
import { type RootState, type AppDispatch } from "@/stores/store";
import { updateState } from "@/stores/features/storeRegister";

interface CardRooteasyProps extends HTMLAttributes<HTMLDivElement> {
  data: IRootEasy;
  className?: string;
}

const CardRooteasy = ({
  data,
  className = "",
  ...props
}: CardRooteasyProps) => {
  const howDidYouFind = useSelector(
    (state: RootState) => state.register.howDidYouFind
  );
  const dispatch = useDispatch<AppDispatch>();

  function HowDidYouFind() {
    dispatch(
      updateState({
        howDidYouFind: data.text,
      })
    );
  }

  return (
    <div
      className={`card-rooteasy ${className}`}
      onClick={HowDidYouFind}
      data-select={howDidYouFind === data.text}
      {...props}
    >
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
