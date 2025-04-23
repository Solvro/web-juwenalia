import Image from "next/image";

import { MAP_ITEMS } from "@/config/legend-items";
import { cn } from "@/lib/utils";

import { MapEnlargementButton } from "./map-enlargement-button";
import { useState } from "react";
import { MapLevelSelector } from "./map-level-selector";

export function StaticMap() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState<number>(0);
  const currentLevel = MAP_ITEMS[0];

  return (
    <div id="map-container">
      <h2 className="mt-16 hidden font-semibold sm:block">Poziomy</h2>
      <div className="mt-5 hidden w-full sm:grid sm:grid-cols-2 sm:gap-2 xl:grid-cols-4">
        <MapLevelSelector
          currentLevelIndex={currentLevelIndex}
          setCurrentLevelIndex={setCurrentLevelIndex}
        />
      </div>

      <div className="mt-16 hidden w-full flex-row items-center justify-between md:flex">
        <h2 className="mt-auto font-semibold">Mapa</h2>
        <MapEnlargementButton currentView={currentLevel} />
      </div>
      <div id="map" className="relative mt-5 h-full w-full xl:min-h-[90svh]">
        <Image
          key={currentLevel.name}
          src={currentLevel.image.src}
          alt={currentLevel.image.alt}
          className={cn(
            "mx-auto aspect-auto h-full w-full max-w-6xl rounded-3xl object-center",
          )}
        />
      </div>
    </div>
  );
}
