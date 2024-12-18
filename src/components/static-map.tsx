import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "./button";

export function StaticMap() {
  const [outside, setOutside] = useState(true);
  const [floorZero, setFloorZero] = useState(false);
  const [floorOne, setFloorOne] = useState(false);
  const [floorMinusOne, setFloorMinusOne] = useState(false);

  function switchMapView(switchTo: string) {
    switch (switchTo) {
      case "Outside": {
        setOutside(true);
        setFloorZero(false);
        setFloorOne(false);
        setFloorMinusOne(false);
        break;
      }
      case "Ground Floor": {
        setOutside(false);
        setFloorZero(true);
        setFloorOne(false);
        setFloorMinusOne(false);
        break;
      }
      case "Floor 1": {
        setOutside(false);
        setFloorZero(false);
        setFloorOne(true);
        setFloorMinusOne(false);
        break;
      }
      case "Floor -1": {
        setOutside(false);
        setFloorZero(false);
        setFloorOne(false);
        setFloorMinusOne(true);
        break;
      }
      default: {
        break;
      }
    }
  }

  return (
    <div className="h-screen bg-slate-700">
      <h1>Map Demo</h1>
      <div id="map-container" className="grid grid-cols-2 gap-5">
        <div id="map" className="">
          <Image
            src="/hala-stulecia-zewnatrz.png"
            alt={"Hala Stulecia Widok Satelitarny"}
            width={1000}
            height={800}
            className={cn(outside ? "" : "hidden")}
          />
          <Image
            src="/hala-stulecia-poziom-0.png"
            alt={"Hala Stulecia Parter"}
            width={1000}
            height={800}
            className={cn(floorZero ? "" : "hidden")}
          />
          <Image
            src="/hala-stulecia-poziom-1.png"
            alt={"Hala Stulecia Piętro 1"}
            width={1000}
            height={800}
            className={cn(floorOne ? "" : "hidden")}
          />
          <Image
            src="/hala-stulecia-piwnica.png"
            alt={"Hala Stulecia Piętro -1"}
            width={1000}
            height={800}
            className={cn(floorMinusOne ? "" : "hidden")}
          />
        </div>
        <div id="controls" className="grid w-1/5 grid-cols-1">
          <Button
            variant={outside ? "destructive" : "default"}
            onClick={() => {
              switchMapView("Outside");
            }}
          >
            Widok Zewnętrzny
          </Button>
          <Button
            variant={floorZero ? "destructive" : "default"}
            onClick={() => {
              switchMapView("Ground Floor");
            }}
          >
            Piętro 0
          </Button>
          <Button
            variant={floorOne ? "destructive" : "default"}
            onClick={() => {
              switchMapView("Floor 1");
            }}
          >
            Piętro 1
          </Button>
          <Button
            variant={floorMinusOne ? "destructive" : "default"}
            onClick={() => {
              switchMapView("Floor -1");
            }}
          >
            Piętro -1
          </Button>
        </div>
      </div>
    </div>
  );
}
