import { MapPin } from "lucide-react";

import type { WrLegendItem } from "@/lib/types";
import { cn } from "@/lib/utils";

import { PaddingWrapper } from "../padding-wrapper";

interface LegendProps {
  items: WrLegendItem[];
  className?: string;
}

export function WrMapLegend({ items, className }: LegendProps) {
  return (
    <PaddingWrapper
      className={cn(
        "grid w-full grid-cols-1 gap-x-5 gap-y-2 sm:grid-cols-3",
        className,
      )}
    >
      {items.map((item) => (
        <div key={item.name} className="flex items-center">
          <MapPin className="mr-2 h-8 w-8" color={item.color} />
          <p className="line-clamp-2 w-[75%] overflow-hidden text-ellipsis text-wrap text-[3vw] sm:text-base">
            {item.name}
          </p>
        </div>
      ))}
    </PaddingWrapper>
  );
}
