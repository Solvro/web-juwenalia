import type { Dispatch, SetStateAction } from "react";

import { MAP_ITEMS } from "@/config/legend-items";
import type { MapFloorsButtonProps } from "@/lib/types";
import { cn } from "@/lib/utils";

function MapFloorsButton({ level, active, ...props }: MapFloorsButtonProps) {
  return (
    <button
      className={cn("flex w-full rounded-xl border-2 border-gray-400 p-0.5", {
        "bg-gradient-main transition-colors duration-200": active,
      })}
      {...props}
    >
      <div
        className={cn(
          "relative isolate flex h-full min-h-[80px] w-full rounded-lg bg-white p-3 px-5",
          {
            "bg-white before:absolute before:inset-0 before:z-[-1] before:bg-gradient-main before:opacity-20 before:transition-colors before:duration-200 before:content-['']":
              active,
          },
        )}
      >
        <div className="grid h-full w-full grid-cols-7 items-center gap-5 md:grid-cols-12 md:gap-3">
          <div className="relative flex aspect-square h-full w-full min-w-[30px] max-w-[30px] items-center justify-end md:col-span-2">
            {level.icon}
          </div>
          <div className="col-span-6 flex w-full md:col-span-10">
            <span className="text-left text-[.95em] text-muted-foreground md:text-sm">
              {level.description}
            </span>
          </div>
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
