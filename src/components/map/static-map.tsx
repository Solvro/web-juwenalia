import Image from "next/image";

import { MAP_ITEMS } from "@/config/legend-items";
import { cn } from "@/lib/utils";

import { MapEnlargementButton } from "./map-enlargement-button";

export function StaticMap() {
  const currentLevel = MAP_ITEMS[0];

  return (
    <div id="map-container">
      <div className="mt-16 flex w-full flex-row items-center justify-between">
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
