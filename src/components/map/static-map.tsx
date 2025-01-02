import Image from "next/image";
import { useState } from "react";

import { mapItems } from "@/config/legend-items";
import type { MapView } from "@/lib/types";
import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { MapFloorsButton } from "./map-floors-button";
import { StaticLegend } from "./static-legend";

export function StaticMap() {
  const [view, setView] = useState<MapView>("Outside");

  function switchMapView(switchTo: MapView) {
    switch (switchTo) {
      case "Outside": {
        setView("Outside");
        break;
      }
      case "Ground Floor": {
        setView("Ground Floor");
        break;
      }
      case "Floor 1": {
        setView("Floor 1");
        break;
      }
      case "Floor -1": {
        setView("Floor -1");
        break;
      }
      default: {
        break;
      }
    }
  }

  return (
    <div>
      <h1 className="mt-8 pl-5 text-4xl font-semibold">Mapa Wydarzenia</h1>
      <hr className="mb-16 mt-5" />
      <div id="map-container">
        <div className="mx-auto mb-10 hidden w-[90%] sm:grid sm:grid-cols-2 sm:gap-2 xl:grid-cols-4">
          {mapItems.map((level) => {
            return (
              <MapFloorsButton
                key={level.name}
                level={level}
                active={view === level.name}
                onClick={() => {
                  switchMapView(level.name);
                }}
              />
            );
          })}
        </div>
        <div id="map" className="w-screen">
          {mapItems.map((MapLevel) => (
            <Image
              key={MapLevel.name}
              src={MapLevel.image.src}
              alt={MapLevel.image.alt}
              width={1000}
              height={800}
              className={cn(
                view === MapLevel.name ? "" : "hidden",
                "mx-auto aspect-square w-[90%] rounded-3xl object-cover",
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
                {mapItems.map((level) => {
                  return (
                    <MapFloorsButton
                      key={level.name}
                      level={level}
                      active={view === level.name}
                      onClick={() => {
                        switchMapView(level.name);
                      }}
                    />
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="Legenda">
            <AccordionTrigger className="pl-5 font-bold">
              Legenda
            </AccordionTrigger>
            <AccordionContent>
              <StaticLegend items={mapItems} activeView={view} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <h2 className="mx-auto mt-4 hidden w-[90%] font-semibold sm:block">
          Legenda
        </h2>
        <StaticLegend
          items={mapItems}
          activeView={view}
          className="hidden sm:my-10 sm:grid"
        />
      </div>
    </div>
  );
}
