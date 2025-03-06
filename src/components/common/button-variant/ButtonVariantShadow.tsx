import { Button } from "@/components/ui/button";
import { ButtonHTMLAttributes } from "react";

type CustomVariant =
  | "default-primary"
  | "default-secondary"
  | "default-tertiary"
  | "default-quaternary"
  | "default-quinary"
  | "default-senary"
  | "default-septenary"
  | "default-eighth"
  | "default-pink"
  | "default-gray";

type ButtonAcceptedVariant =
  | "default-primary"
  | "default-secondary"
  | "default-tertiary"
  | "pink"
  | "default-gray"
  | null
  | undefined;

const variantMapping: Record<CustomVariant, ButtonAcceptedVariant> = {
  "default-primary": "default-primary",
  "default-secondary": "default-secondary",
  "default-tertiary": "default-tertiary",
  "default-quaternary": "default-primary",
  "default-quinary": "default-primary",
  "default-senary": "default-primary",
  "default-septenary": "default-primary",
  "default-eighth": "default-primary",
  "default-pink": "pink",
  "default-gray": "default-gray",
};

interface ButtonVariantProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  variant?: CustomVariant | null | undefined;
  shadow?: boolean;
}

const ButtonVariant = ({
  children,
  shadow = true,
  variant = "default-primary",
  ...props
}: ButtonVariantProps) => {
  return (
    <Button
      className={shadow ? "button-variant-shadow" : ""}
      variant={variant ? variantMapping[variant] : undefined}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonVariant;
