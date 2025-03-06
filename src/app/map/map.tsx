"use client";

import dynamic from "next/dynamic";
import { Suspense, useState } from "react";

import { Button } from "@/components/button";
import { StaticMap } from "@/components/map/static-map";
import { PaddingWrapper } from "@/components/padding-wrapper";
import type { WrItemPoint, WrItemPolyline } from "@/lib/types";

interface Props {
  dynamicMapLocations: {
    mapPoints: WrItemPoint[];
    mapPolylines: WrItemPolyline[];
  };
}

const DynamicInteractiveMap = dynamic(
  async () =>
    import("@/components/map/interactive-map").then(
      (module_) => module_.InteractiveMap,
    ),
  {
    ssr: false,
  },
);

export function Map({ dynamicMapLocations }: Props) {
  const [activeStaticMap, setActiveStaticMap] = useState(true);

  function switchMap() {
    setActiveStaticMap(!activeStaticMap);
  }

  return (
    <PaddingWrapper>
      <div className="mt-44 grid grid-cols-2 gap-10">
        <Button
          disabled={activeStaticMap}
          onClick={() => {
            switchMap();
          }}
          className="mx-auto text-wrap p-6 text-[3vw] sm:text-base"
        >
          Mapa Wydarzenia
        </Button>
        <Button
          disabled={!activeStaticMap}
          onClick={() => {
            switchMap();
          }}
          className="mx-auto text-wrap p-6 text-[3vw] sm:text-base"
        >
          Imprezy Towarzyszące
        </Button>
      </div>
      <div className="mt-16">
        {activeStaticMap ? (
          <StaticMap />
        ) : (
          <Suspense fallback={<div>Loading...</div>}>
            <DynamicInteractiveMap WrMapProps={dynamicMapLocations} />
          </Suspense>
        )}
      </div>
    </PaddingWrapper>
  );
}
