import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors ...",
  {
    variants: {
      variant: {
        "default-primary":
          "bg-default-primary text-primary-foreground shadow hover:bg-default-secondary",
        "default-secondary":
          "bg-default-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        "default-tertiary":
          "bg-default-tertiary text-tertiary-foreground shadow-sm hover:bg-tertiary/80",
        pink: "bg-default-pink text-white w-auto",
        "default-gray": "bg-default-gray text-default-primary",
      },
      size: {
        default: "h-9 px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "default-primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
