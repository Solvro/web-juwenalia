'use client';

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {ArrowRight} from "lucide-react";

const buttonVariants = cva(
  "relative overflow-hidden inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border text-[16px] md:text-[18px] font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
  variants: {
      variant: {
        default: "text-foreground",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-6 py-3 md:px-8 md:py-4",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
);
Button.displayName = "Button"

interface GradientButtonProps extends ButtonProps {
  children: React.ReactNode;
  asChild?: boolean;
  colorType?: 'black' | 'white';
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({children, colorType = 'black', asChild = false, ...props }, ref) => {

    return (
      <Button
        ref={ref}
        asChild={asChild}
        size="default"
        className={cn("group before:pointer-events-auto before:content-[''] before:absolute before:bg-gradient-green-blue " +
          "before:w-[110%] before:h-[200%] before:z-[-1] isolate before:top-full before:rounded-[50%] " +
          "before:transition-all before:duration-[200ms] before:ease-out hover:before:-top-1/2 " +
          "hover:before:ease-in hover:before:origin-top", {
          'border-black': colorType === 'black',
          'border-white': colorType === 'white'
        })}
        {...props}
      >
        <div className="flex gap-4 md:gap-8 items-center relative cursor-pointer pointer-events-auto">
          <span className={cn({
            "text-foreground": colorType === 'black',
            'text-white': colorType === 'white'
          })}>{children}</span>

          <div className="grid place-items-center h-6 w-6 md:h-8 md:w-8 relative">
            <div className="w-2 h-2 bg-gradient-green-blue rounded-full transition-transform duration-75
                            group-hover:scale-0" />
            <div className="absolute w-full h-full grid place-items-center bg-black rounded-full scale-0
                            transition-transform duration-150 rotate-[30deg] ease-out group-hover:animate-reveal-arrow group-hover:ease-in">
              <ArrowRight className="!size-5 md:!size-6 text-white" />
            </div>
          </div>
        </div>
      </Button>
    );
  }
);
GradientButton.displayName = "CustomButton";


export { GradientButton, Button, buttonVariants }
