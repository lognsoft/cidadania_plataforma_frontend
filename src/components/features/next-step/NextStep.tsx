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
      <Link href={disabled ? "#" : href} passHref>
        <Button
          variant={disabled ? "default-gray" : "default-primary"}
          className="w-full max-w-[200px]"
          disabled={false}
        >
          {text}
        </Button>
      </Link>
    </div>
  );
};

export default NextStepComponent;
