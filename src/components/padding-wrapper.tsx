import type { ClassValue } from "clsx";

import { cn } from "@/lib/utils";

export function PaddingWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: ClassValue;
}) {
  return (
    <div className={cn("w-full px-4 md:px-8 lg:px-12 xl:px-16", className)}>
      {children}
    </div>
  );
}
