"use client";
import Link from "next/link";
import "./nextstep-component.css";
import { Button } from "@/components/ui/button";

interface INextStepComponentProps {
  text: string;
  href: string;
  disabled: boolean;
  className?: string;
}

const NextStepComponent = ({
  text,
  href,
  disabled,
  className,
}: INextStepComponentProps) => {
  return (
    <div className="next-step">
      {/* <Link className="block w-full" href={disabled ? "#" : href} passHref>
        
      </Link> */}
      <Button
        variant={disabled ? "default-gray" : "default-primary"}
        className="w-full max-w-[200px] block"
        disabled={false}
      >
        {text}
      </Button>
    </div>
  );
};

export default NextStepComponent;
