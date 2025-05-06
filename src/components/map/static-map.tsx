import Image from "next/image";
import { useState } from "react";

import { MAP_ITEMS } from "@/config/legend-items";
import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { MapEnlargementButton } from "./map-enlargement-button";
import { MapLevelSelector } from "./map-level-selector";
import { StaticLegend } from "./static-legend";

export function StaticMap() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState<number>(0);
  const currentLevel = MAP_ITEMS[currentLevelIndex];

  return (
    <div id="map-container">
      <div className="mt-16 flex w-full flex-row items-center justify-between">
        <h2 className="mt-auto font-semibold">Mapa</h2>
        <MapEnlargementButton currentView={currentLevel} />
      </div>

      <div
        id="map"
        className="relative mt-5 h-full min-h-[100svh] w-full xl:min-h-[90svh]"
      >
        {MAP_ITEMS.map((dialogMapLevel, dialogMapLevelIndex) => (
          <Image
            key={dialogMapLevel.name}
            src={dialogMapLevel.image.src}
            alt={dialogMapLevel.image.alt}
            fill
            className={cn(
              "aspect-auto h-full w-full rounded-3xl object-cover object-center",
              {
                hidden: dialogMapLevelIndex !== currentLevelIndex,
              },
            )}
          />
        ))}
      </div>
      <Accordion type="multiple" className="mt-5 sm:hidden">
        <AccordionItem value="Poziomy" className="!border-0">
          <AccordionTrigger className="pl-5 font-bold">
            Poziomy
          </AccordionTrigger>
          <AccordionContent>
            <div id="controls" className="grid grid-cols-1 gap-5">
              <MapLevelSelector
                currentLevelIndex={currentLevelIndex}
                setCurrentLevelIndex={setCurrentLevelIndex}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Legenda" className="!border-0">
          <AccordionTrigger className="pl-5 font-bold">
            Legenda
          </AccordionTrigger>
          <AccordionContent>
            <StaticLegend activeLevel={currentLevel} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <h2 className="mt-8 hidden w-full font-semibold sm:block">Legenda</h2>
      <StaticLegend
        activeLevel={currentLevel}
        className="hidden w-full sm:my-10 sm:grid"
      />
    </div>
  );
}
