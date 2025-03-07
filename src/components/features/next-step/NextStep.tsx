"use client";
import "./nextstep-component.css";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface INextStepComponentProps {
  text: string;
  href: string;
}

const NextStepComponent = ({ text, href }: INextStepComponentProps) => {
  const [disabled, setDisabled] = useState<boolean>(true);

  return (
    <div className="next-step">
      <Button
        variant={disabled ? "default-gray" : "default-primary"}
        className="w-full max-w-[200px]"
        disabled={false}
      >
        {text}
      </Button>
    </div>
  );
};

export default NextStepComponent;
