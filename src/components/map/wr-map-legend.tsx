import { MapPin } from "lucide-react";

import type { WrItemPoint, WrItemPolyline } from "@/lib/types";
import { cn } from "@/lib/utils";

import { PaddingWrapper } from "../padding-wrapper";

interface LegendProps {
  items: {
    mapPoints: WrItemPoint[];
    mapPolylines: WrItemPolyline[];
  };
  className?: string;
}

export function WrMapLegend({ items, className }: LegendProps) {
  const { mapPoints, mapPolylines } = items;
  return (
    <PaddingWrapper>
      <h3 className="mx-auto mt-4 hidden w-[90%] font-semibold sm:block">
        Lokalizacje
      </h3>
      <div
        className={cn(
          "grid w-full grid-cols-1 gap-x-5 gap-y-2 sm:grid-cols-3",
          className,
        )}
      >
        {mapPoints.map((mapPoint) => (
          <div key={mapPoint.name} className="flex items-center">
            <MapPin className="mr-2 h-8 w-8" color={mapPoint.color} />
            <p className="line-clamp-2 w-[75%] overflow-hidden text-ellipsis text-wrap text-[3vw] sm:text-base">
              {mapPoint.name}
            </p>
          </div>
        ))}
      </div>
      <h3 className="mx-auto mt-4 hidden w-[90%] font-semibold sm:block">
        Pochody
      </h3>
      <div
        className={cn(
          "grid w-full grid-cols-1 gap-x-5 gap-y-2 sm:grid-cols-3",
          className,
        )}
      >
        {mapPolylines.map((mapPolyline) => (
          <div key={mapPolyline.name} className="flex items-center">
            <div
              className="mr-2 h-4 w-4 rounded-full"
              style={{ backgroundColor: mapPolyline.color }}
            />
            <p className="line-clamp-2 w-[75%] overflow-hidden text-ellipsis text-wrap text-[3vw] sm:text-base">
              {mapPolyline.name}
            </p>
          </div>
        ))}
      </div>
    </PaddingWrapper>
  );
}
