"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative overflow-hidden inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border text-[14px] md:text-[16px] font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "text-foreground",
        secondary: "",
        gradient: "before:bg-gradient-main",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        ghost:
          "border-0 bg-slate-500/0 transition-colors hover:bg-slate-500/10",
        link: "border-0 !py-1 !px-2",
      },
      variantColor: {
        default: "border-black",
        black: "border-black",
        white: "!border-white",
      },
      size: {
        default: "px-6 py-3 md:px-8 md:py-3",
        sm: "px-5 py-1 !text-[14px]",
        lg: "px-12 py-5",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      variantColor: "default",
    },
  },
);

type Variant = VariantProps<typeof buttonVariants>["variant"];
type VariantColor = VariantProps<typeof buttonVariants>["variantColor"];
type Size = VariantProps<typeof buttonVariants>["size"];

export interface ButtonProps<T extends React.ElementType = "button">
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  variantColor?: VariantColor;
  size?: Size;
  as?: T;
  asChild?: boolean;
}

type T = React.ElementType;

const Button = React.forwardRef<
  HTMLElement,
  ButtonProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
>(
  (
    {
      children,
      className = "",
      size = "default" as Size,
      disabled = false,
      as = "button",
      variant = "default" as Variant,
      variantColor = "black" as VariantColor,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = (asChild as boolean) ? Slot : (as as T);

    return (
      <Comp
        className={cn(
          buttonVariants({
            variant: variant as Variant,
            size: size as Size,
            className: className as string,
            variantColor: variantColor as VariantColor,
          }),
          "group inline-flex w-fit before:pointer-events-auto before:absolute before:bg-transparent before:content-['']" +
            " isolate before:top-full before:z-[-1] before:h-[200%] before:w-[110%] before:rounded-[50%]" +
            " before:ease-[cubic-bezier(.23,1,.32,1)] before:transition-all before:duration-200 hover:before:-top-1/2" +
            " hover:before:origin-top hover:before:ease-in",
          {
            "before:bg-white":
              ["default", "secondary"].includes((variant ?? "") as string) &&
              variantColor === ("white" as string),
            "before:bg-black":
              ["default", "secondary"].includes((variant ?? "") as string) &&
              ["black"].includes((variantColor ?? "") as string),
            "pointer-events-none bg-foreground/20 opacity-50":
              disabled as boolean,
          },
        )}
        ref={ref}
        {...(props as React.ComponentPropsWithoutRef<T>)}
      >
        <ButtonContent
          variant={variant as Variant}
          size={size as Size}
          variantColor={variantColor as VariantColor}
          disabled={disabled as boolean}
        >
          {children}
        </ButtonContent>
      </Comp>
    );
  },
);
Button.displayName = "Button";

function ButtonContent({
  children,
  variantColor,
  variant,
  disabled,
}: VariantProps<typeof buttonVariants> & {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
    variantColor?: VariantColor;
    size?: Size;
  }) {
  return (
    <div
      className={cn(
        "pointer-events-auto relative flex w-full cursor-pointer items-center justify-between gap-4 md:gap-8",
        {
          "pointer-events-none": disabled,
        },
      )}
    >
      <span
        className={cn("lowercase transition-all duration-200", {
          "text-foreground": variantColor === ("black" as string),
          "text-white": variantColor === ("white" as string),
          "group-hover:text-black":
            ["default", "secondary"].includes((variant ?? "") as string) &&
            variantColor === ("white" as string),
          "group-hover:text-white":
            ["default", "secondary"].includes((variant ?? "") as string) &&
            variantColor === ("black" as string),
          "underline-animation flex": variant === ("link" as string),
        })}
      >
        {children}
      </span>

      {(variant === ("gradient" as string) ||
        variant === ("secondary" as string)) && (
        <div className="relative grid h-6 w-6 place-items-center md:h-8 md:w-8">
          <div
            className={cn(
              "h-2 w-2 rounded-full transition-transform duration-75 group-hover:scale-0",
              {
                "bg-gradient-main": variant === ("gradient" as string),
                "bg-white":
                  variant === ("secondary" as string) &&
                  variantColor === ("white" as string),
                "bg-black":
                  variant === ("secondary" as string) &&
                  variantColor === ("black" as string),
              },
            )}
          />
          <div className="absolute grid h-full w-full rotate-[30deg] scale-0 place-items-center rounded-full bg-black transition-transform duration-150 ease-out group-hover:animate-reveal-arrow group-hover:ease-in">
            <ArrowRight className="!size-5 text-white md:!size-6" />
          </div>
        </div>
      )}
    </div>
  );
}

export { Button, buttonVariants };
