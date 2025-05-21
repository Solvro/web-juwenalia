"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { Suspense, useState } from "react";
import { SyncLoader } from "react-spinners";

import Branch from "@/../public/no-map-info/branch_br.svg";
import LeafTop from "@/../public/no-map-info/leaf_top.svg";
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
      <PaddingWrapper className="relative">
        <Image
          src={LeafTop as StaticImageData}
          alt="ilustracja liści"
          className="pointer-events-none absolute -top-5 right-16 w-[160px] select-none md:right-32 md:w-[240px] lg:right-64 xl:w-[321px]"
        />

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
        src={Branch as StaticImageData}
        alt="ilustracja liści"
        className="pointer-events-none absolute -bottom-32 right-20 w-[150px] md:w-[215px] lg:right-48 xl:w-[300px]"
      />
    </div>
  );
}
