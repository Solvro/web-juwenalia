"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { Suspense, useState } from "react";
import { SyncLoader } from "react-spinners";

import Bush from "@/../public/no-map-info/bush_full.svg";
import Fire1 from "@/../public/no-map-info/fire1.svg";
import Fire2 from "@/../public/no-map-info/fire2.svg";
import Mountain from "@/../public/no-map-info/mountain.svg";
import { TabSelectorBar } from "@/components/about-us/tab-selector-bar";
import { HorizontalRule } from "@/components/horizontal-rule";
import { StaticMap } from "@/components/map/static-map";
import { PaddingWrapper } from "@/components/padding-wrapper";
import type { ArrayIndex, WrItemPoint, WrItemPolyline } from "@/lib/types";

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
  { ssr: false },
);

const MAP_TYPES: readonly string[] = [
  "Mapa wydarzenia",
  "Imprezy towarzyszące",
] as const;

export function Map({ dynamicMapLocations }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<
    ArrayIndex<typeof MAP_TYPES>
  >(1 as ArrayIndex<typeof MAP_TYPES>);

  return (
    <div className="relative mt-16 pb-32">
      <PaddingWrapper>
        <h1 className="my-8 text-2xl font-extrabold sm:text-left sm:text-5xl">
          Mapa Wydarzenia
        </h1>
      </PaddingWrapper>
      <HorizontalRule />
      <Image
        src={Fire2 as StaticImageData}
        alt="ilustracja ogień"
        className="pointer-events-none absolute -right-6 -top-4 w-[70px] -rotate-45 select-none sm:w-[100px] md:w-[80px] xl:w-[140px]"
      />

      <Image
        src={Bush as StaticImageData}
        alt="ilustracja krzak"
        className="pointer-events-none absolute -left-8 top-72 z-10 w-[90px] rotate-90 select-none sm:-left-12 sm:top-64 sm:w-[110px] md:w-[120px] xl:w-[140px]"
      />
      <PaddingWrapper className="relative">
        <div className="flex w-full flex-col">
          <h2 className="mt-16 font-semibold">Rodzaj mapy</h2>
          <div className="mt-5 w-full">
            <TabSelectorBar
              options={MAP_TYPES}
              selectedIdx={selectedIndex}
              setSelectedIdx={setSelectedIndex}
            />
          </div>
        </div>

        {selectedIndex === 0 ? (
          <StaticMap />
        ) : (
          <Suspense
            fallback={<SyncLoader className="mx-auto my-[40vh] h-full w-fit" />}
          >
            <DynamicInteractiveMap WrMapProps={dynamicMapLocations} />
          </Suspense>
        )}
      </PaddingWrapper>

      <Image
        src={Mountain as StaticImageData}
        alt="ilustracja góra"
        className="pointer-events-none absolute -bottom-32 right-0 w-[200px] select-none sm:w-[300px] xl:w-[350px]"
      />

      <Image
        src={Fire1 as StaticImageData}
        alt="ilustracja liści"
        className="pointer-events-none absolute -bottom-36 -left-6 w-[70px] md:w-[105px] lg:right-48 xl:-bottom-40 xl:-left-10 xl:w-[150px]"
      />
    </div>
  );
}
