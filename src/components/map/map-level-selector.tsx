import type { Dispatch, SetStateAction } from "react";

import { MAP_ITEMS } from "@/config/legend-items";
import type { MapFloorsButtonProps } from "@/lib/types";
import { cn } from "@/lib/utils";

function MapFloorsButton({ level, active, ...props }: MapFloorsButtonProps) {
  return (
    <button
      className={cn(
        "mx-auto h-16 w-[90%] rounded-2xl border-0 sm:h-20 sm:w-full",
        active ? "bg-gradient-main" : "border-2 border-gray-400",
      )}
      {...props}
    >
      <div
        className={cn(
          "mx-auto h-[calc(4rem-5px)] w-[calc(100%-5px)] rounded-[0.9rem] sm:h-[calc(5rem-5px)] sm:w-[calc(100%-5px)]",
          active ? "bg-white/85" : "",
        )}
      >
        <div className="grid h-full w-full grid-cols-[minmax(80px,_1fr)_minmax(calc(100%-50px),_1fr)]">
          <div className="mx-auto my-auto overflow-hidden">{level.icon}</div>
          <span className="w-[calc(100%-2.5rem)] self-center text-wrap text-left text-muted-foreground">
            {level.description}
          </span>
        </div>
      </div>
    </button>
  );
}

export function MapLevelSelector({
  currentLevelIndex,
  setCurrentLevelIndex,
}: {
  currentLevelIndex: number;
  setCurrentLevelIndex: Dispatch<SetStateAction<number>>;
}) {
  return MAP_ITEMS.map((level, mapItemIndex) => (
    <MapFloorsButton
      key={level.name}
      level={level}
      active={currentLevelIndex === mapItemIndex}
      onClick={() => {
        setCurrentLevelIndex(mapItemIndex);
      }}
    />
  ));
}
