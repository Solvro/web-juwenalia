import { MapPin } from "lucide-react";

import { WrLegendItem } from "@/lib/types";
import { cn } from "@/lib/utils";

interface LegendProps {
  items: WrLegendItem[];
  className?: string;
}

export function WrMapLegend({ items, className }: LegendProps) {
  return (
    <div
      className={cn(
        "mx-auto grid w-[90%] grid-cols-2 gap-x-28 gap-y-2 sm:w-fit sm:gap-x-4",
        className,
      )}
    >
      {items.map((item) => (
        <div key={item.name} className="flex items-center">
          <MapPin className="mr-2 h-8 w-8" color={item.color} />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}
