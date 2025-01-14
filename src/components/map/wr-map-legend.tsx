import { MapPin } from "lucide-react";

import type { WrLegendItem } from "@/lib/types";
import { cn } from "@/lib/utils";

interface LegendProps {
  items: WrLegendItem[];
  className?: string;
}

export function WrMapLegend({ items, className }: LegendProps) {
  return (
    <div
      className={cn(
        "mx-auto grid w-[90%] grid-cols-2 gap-x-5 gap-y-2 sm:grid-cols-[repeat(3,minmax(0,20vw))] md:w-max",
        className,
      )}
    >
      {items.map((item) => (
        <div key={item.name} className="flex items-center">
          <MapPin className="mr-2 h-8 w-8" color={item.color} />
          <p className="w-[75%] text-wrap text-[3vw] sm:text-base">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
}
