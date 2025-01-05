import { Maximize } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { mapItems } from "@/config/legend-items";
import type { MapLevel, MapView } from "@/lib/types";
import { cn } from "@/lib/utils";

import { Button } from "../button";
import { NoDataInfo } from "../no-data-info";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { MapFloorsButton } from "./map-floors-button";
import { StaticLegend } from "./static-legend";

export function StaticMap() {
  const [view, setView] = useState<MapView>("Outside");
  const [currentView, setCurrentView] = useState<MapLevel>(mapItems[0]);

  function switchMapView(switchTo: MapView) {
    try {
      const temp = mapItems.find((item) => item.name === switchTo);
      setCurrentView(temp || mapItems[0]);
    } catch (err) {
      return (
        <NoDataInfo
          errorTitle="Brak widoku mapy"
          errorMessage="Mapa dla tego widoku jest niedostępna."
        />
      );
    }
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
        <div className="mx-auto mb-5 flex w-[90%] flex-row items-center justify-between">
          <h2 className="mt-auto font-semibold">Mapa</h2>
          <Dialog>
            <DialogTrigger asChild className="hidden xl:flex">
              <Button
                variant="default"
                className="hidden w-max items-center xl:flex [&_svg]:size-6"
              >
                <div className="flex flex-row gap-2">
                  <Maximize />
                  <span className="normal-case">Powiększ</span>
                </div>
              </Button>
            </DialogTrigger>
            <DialogContent className="fixed left-[50vw] top-[50vh] h-fit max-w-fit">
              <DialogHeader className="">
                <DialogTitle className="mb-2 text-center">
                  {currentView.description}
                </DialogTitle>
                <DialogDescription className="h-[85vh] w-max">
                  <Image
                    src={currentView.image.src}
                    alt={currentView.image.alt}
                    width={1000}
                    height={800}
                    className="mx-auto h-full rounded-3xl"
                  />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
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
