"use client";

import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import * as React from "react";
import { Config } from "tailwindcss";

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

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "default",
      size,
      variantColor = "black",
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className, variantColor }),
          "group before:pointer-events-auto before:absolute before:bg-transparent before:content-['']" +
            " isolate before:top-full before:z-[-1] before:h-[200%] before:w-[110%] before:rounded-[50%]" +
            " before:ease-[cubic-bezier(.23,1,.32,1)] before:transition-all before:duration-200 hover:before:-top-1/2" +
            " hover:before:origin-top hover:before:ease-in",
          {
            "before:bg-white":
              ["default", "secondary"].includes(variant || "") &&
              variantColor === "white",
            "before:bg-black":
              ["default", "secondary"].includes(variant || "") &&
              ["black"].includes(variantColor),
          },
        )}
        ref={ref}
        {...props}
      >
        <div className="pointer-events-auto relative flex cursor-pointer items-center gap-4 md:gap-8">
          <span
            className={cn("lowercase transition-all duration-200", {
              "text-foreground": variantColor === "black",
              "text-white": variantColor === "white",
              "group-hover:text-black":
                ["default", "secondary"].includes(variant || "") &&
                variantColor === "white",
              "group-hover:text-white":
                ["default", "secondary"].includes(variant || "") &&
                variantColor === "black",
              "": variant === "link",
            })}
          >
            {children}
          </span>

          {(variant === "gradient" || variant === "secondary") && (
            <div className="relative grid h-6 w-6 place-items-center md:h-8 md:w-8">
              <div
                className={cn(
                  "h-2 w-2 rounded-full transition-transform duration-75 group-hover:scale-0",
                  {
                    "bg-gradient-main": variant === "gradient",
                    "bg-white":
                      variant === "secondary" && variantColor === "white",
                    "bg-black":
                      variant === "secondary" && variantColor === "black",
                  },
                )}
              />
              <div className="absolute grid h-full w-full rotate-[30deg] scale-0 place-items-center rounded-full bg-black transition-transform duration-150 ease-out group-hover:animate-reveal-arrow group-hover:ease-in">
                <ArrowRight className="!size-5 text-white md:!size-6" />
              </div>
            </div>
          )}
        </div>
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
