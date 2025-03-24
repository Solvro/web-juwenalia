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
    <div
      className={cn(
        "w-full px-4 md:px-8 lg:px-12 xl:px-16",
        className,
        isShaking ? "animate-shake" : "",
      )}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
