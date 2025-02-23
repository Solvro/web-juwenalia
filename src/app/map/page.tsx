"use client";

import dynamic from "next/dynamic";
import { Suspense, useState } from "react";

import { Button } from "@/components/button";
import { StaticMap } from "@/components/map/static-map";
import { PaddingWrapper } from "@/components/padding-wrapper";

const DynamicInteractiveMap = dynamic(
  async () =>
    import("@/components/map/interactive-map").then(
      (module_) => module_.InteractiveMap,
    ),
  {
    ssr: false,
  },
);

export default function Page() {
  const [activeStaticMap, setActiveStaticMap] = useState(true);
  const [activeInteractiveMap, setActiveInteractiveMap] = useState(false);

  function switchMap() {
    setActiveStaticMap(!activeStaticMap);
    setActiveInteractiveMap(!activeInteractiveMap);
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
          disabled={activeInteractiveMap}
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
            <DynamicInteractiveMap />
          </Suspense>
        )}
      </div>
    </PaddingWrapper>
  );
}
