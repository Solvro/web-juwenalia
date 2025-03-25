import type { ClassValue } from "clsx";
import type { CSSProperties } from "react";
import { useState } from "react";

import { cn } from "@/lib/utils";

export function LeafComponent({
  children,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  className?: ClassValue;
  style?: CSSProperties;
}) {
  const [isShaking, setIsShaking] = useState(false);

  const handleClick = () => {
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
    }, 500);
  };

  return (
    <button
      className={cn(className, isShaking ? "animate-shake" : "")}
      onClick={handleClick}
      style={style}
    >
      {children}
    </button>
  );
}
