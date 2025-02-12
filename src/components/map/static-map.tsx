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
    <>
      <h1 className="mt-8 pl-5 text-4xl font-semibold">Mapa Wydarzenia</h1>
      <hr className="mb-16 mt-5" />
      <div id="map-container">
        <div className="mx-auto mb-10 hidden w-[90%] sm:grid sm:grid-cols-2 sm:gap-2 xl:grid-cols-4">
          <MapLevelSelector
            currentLevelIndex={currentLevelIndex}
            setCurrentLevelIndex={setCurrentLevelIndex}
          />
        </div>
        <div className="mx-auto mb-5 flex w-[90%] flex-row items-center justify-between">
          <h2 className="mt-auto font-semibold">Mapa</h2>
          <MapEnlargementButton currentView={currentLevel} />
        </div>
        <div id="map" className="">
          {MAP_ITEMS.map((dialogMapLevel, dialogMapLevelIndex) => (
            <Image
              key={dialogMapLevel.name}
              src={dialogMapLevel.image.src}
              alt={dialogMapLevel.image.alt}
              width={1000}
              height={800}
              className={cn(
                "mx-auto aspect-square w-[90%] rounded-3xl object-cover sm:aspect-auto",
                { hidden: dialogMapLevelIndex !== currentLevelIndex },
              )}
            />
          ))}
        </div>
        <Accordion type="multiple" className="sm:hidden">
          <AccordionItem value="Poziomy">
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
          <AccordionItem value="Legenda">
            <AccordionTrigger className="pl-5 font-bold">
              Legenda
            </AccordionTrigger>
            <AccordionContent>
              <StaticLegend activeLevel={currentLevel} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <h2 className="mx-auto mt-4 hidden w-[90%] font-semibold sm:block">
          Legenda
        </h2>
        <StaticLegend
          activeLevel={currentLevel}
          className="mx-auto hidden sm:my-10 sm:grid"
        />
      </div>
    </>
  );
}
