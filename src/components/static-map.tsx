import { Sun, SunIcon, SunMedium } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "./button";
import { MapFloorsButton } from "./map-floors-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function StaticMap() {
  const [outside, setOutside] = useState(true);
  const [floorZero, setFloorZero] = useState(false);
  const [floorOne, setFloorOne] = useState(false);
  const [floorMinusOne, setFloorMinusOne] = useState(false);

  function switchMapView(switchTo: string) {
    switch (switchTo) {
      case "Outside":
        setOutside(true);
        setFloorZero(false);
        setFloorOne(false);
        setFloorMinusOne(false);
        break;
      case "Ground Floor":
        setOutside(false);
        setFloorZero(true);
        setFloorOne(false);
        setFloorMinusOne(false);
        break;
      case "Floor 1":
        setOutside(false);
        setFloorZero(false);
        setFloorOne(true);
        setFloorMinusOne(false);
        break;
      case "Floor -1":
        setOutside(false);
        setFloorZero(false);
        setFloorOne(false);
        setFloorMinusOne(true);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <h1 className="mt-8 pl-5 text-4xl font-semibold">Mapa Wydarzenia</h1>
      <hr className="mb-16 mt-5" />
      <div id="map-container">
        <div className="mx-auto mb-10 hidden w-[90%] sm:grid sm:grid-cols-2 sm:gap-2 xl:grid-cols-4">
          <MapFloorsButton
            onClick={() => switchMapView("Outside")}
            active={outside}
            text="Scena plenerowa, gastronomia, atrakcje"
            icon={<SunIcon className="size-10" />}
          />
          <MapFloorsButton
            onClick={() => switchMapView("Floor 1")}
            active={floorOne}
            text="Trybuna A, strefa dla gości"
            icon={<h1 className="text-3xl font-bold">1</h1>}
          />
          <MapFloorsButton
            onClick={() => switchMapView("Ground Floor")}
            active={floorZero}
            text="Strefa atrakcji, backstage"
            icon={<h1 className="text-3xl font-bold">0</h1>}
          />
          <MapFloorsButton
            onClick={() => switchMapView("Floor -1")}
            active={floorMinusOne}
            text="Scena techno, gastronomia, strefa partnera"
            icon={<h1 className="text-3xl font-bold">-1</h1>}
          />
        </div>
        <div id="map" className="w-screen">
          <Image
            src="/hala-stulecia-zewnatrz.png"
            alt={"Hala Stulecia Widok Satelitarny"}
            width={1000}
            height={800}
            className={cn(
              outside ? "" : "hidden",
              "mx-auto aspect-square w-[90%] rounded-3xl object-cover xl:aspect-auto xl:object-fill",
            )}
          />
          <Image
            src="/hala-stulecia-poziom-0.png"
            alt={"Hala Stulecia Parter"}
            width={1000}
            height={800}
            className={cn(
              floorZero ? "" : "hidden",
              "mx-auto aspect-square w-[90%] rounded-3xl object-cover",
            )}
          />
          <Image
            src="/hala-stulecia-poziom-1.png"
            alt={"Hala Stulecia Piętro 1"}
            width={1000}
            height={800}
            className={cn(
              floorOne ? "" : "hidden",
              "mx-auto aspect-square w-[90%] rounded-3xl object-cover",
            )}
          />
          <Image
            src="/hala-stulecia-piwnica.png"
            alt={"Hala Stulecia Piętro -1"}
            width={1000}
            height={800}
            className={cn(
              floorMinusOne ? "" : "hidden",
              "mx-auto aspect-square w-[90%] rounded-3xl object-cover",
            )}
          />
        </div>
        <Accordion type="multiple" className="sm:hidden">
          <AccordionItem value="Poziomy">
            <AccordionTrigger className="pl-5 font-bold">
              Poziomy
            </AccordionTrigger>
            <AccordionContent>
              <div id="controls" className="grid grid-cols-1 gap-5">
                <MapFloorsButton
                  onClick={() => switchMapView("Outside")}
                  active={outside}
                  text="Scena plenerowa, gastronomia, atrakcje"
                  icon={<SunIcon className="size-10" />}
                />
                <MapFloorsButton
                  onClick={() => switchMapView("Floor 1")}
                  active={floorOne}
                  text="Trybuna A, strefa dla gości"
                  icon={<h1 className="text-3xl font-bold">1</h1>}
                />
                <MapFloorsButton
                  onClick={() => switchMapView("Ground Floor")}
                  active={floorZero}
                  text="Strefa atrakcji, backstage"
                  icon={<h1 className="text-3xl font-bold">0</h1>}
                />
                <MapFloorsButton
                  onClick={() => switchMapView("Floor -1")}
                  active={floorMinusOne}
                  text="Scena techno, gastronomia, strefa partnera"
                  icon={<h1 className="text-3xl font-bold">-1</h1>}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
