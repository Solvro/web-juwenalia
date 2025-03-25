import type { ClassValue } from "clsx";
import { useState } from "react";

import { cn } from "@/lib/utils";

export function LeafComponent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: ClassValue;
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
    >
      {children}
    </button>
  );
}
