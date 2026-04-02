"use client";

import Image, { type StaticImageData } from "next/image";

import Bush from "@/../public/no-map-info/bush_top.svg";
import Mountain from "@/../public/no-map-info/mountain.svg";
import Pin1 from "@/../public/no-map-info/pin1.svg";
import Pin2 from "@/../public/no-map-info/pin2.svg";
import { HorizontalRule } from "@/components/horizontal-rule";

import { Button } from "../button";

export function NoMapInfo() {
  return (
    <div className="relative -mb-32 flex w-full flex-col items-center text-center">
      <HorizontalRule />

      <div className="relative w-full">
        <Image
          src={Bush as StaticImageData}
          alt="ilustracja kszaka"
          className="pointer-events-none absolute -top-5 left-0 w-[100px] select-none md:w-[160px] lg:right-64 xl:w-[160px]"
        />

        <div className="z-10">
          <div className="mb-10 mt-36 font-extrabold leading-[95.625%] md:mt-72">
            <span className="bg-gradient-blue-green bg-clip-text text-[32px] text-transparent sm:text-[54px] lg:text-[96px]">
              MAPA POJAWI SIĘ
            </span>
            <br />
            <br />
            <span className="bg-gradient-blue-green bg-clip-text text-[39px] leading-[95.625%] text-transparent sm:text-[64px] lg:text-[115px]">
              JUŻ WKRÓTCE!
            </span>
          </div>

          <h1 className="mx-8 mb-6 text-xl sm:text-2xl">
            Mapa nie jest jeszcze dostępna. Wróć tutaj później!
          </h1>

          <Button
            className="mb-24 mt-2 sm:mb-52"
            onClick={() => {
              window.location.reload();
            }}
          >
            Odśwież
          </Button>
        </div>

        <Image
          src={Pin1 as StaticImageData}
          alt="pineska"
          className="pointer-events-none absolute bottom-10 left-5 w-[40px] select-none sm:left-8 sm:w-[60px] md:bottom-24 md:left-16 md:w-[84px] xl:bottom-28 xl:left-44 xl:w-[104px]"
        />
        <Image
          src={Pin2 as StaticImageData}
          alt="pineska odwrócona"
          className="pointer-events-none absolute bottom-9 left-16 w-[30px] select-none sm:left-24 sm:w-[50px] md:bottom-24 md:left-40 md:w-[62px] xl:bottom-24 xl:left-72 xl:w-[74px]"
        />
      </div>

      <Image
        src={Mountain as StaticImageData}
        alt="ilustracja góra"
        className="pointer-events-none absolute bottom-0 right-0 w-[150px] select-none sm:w-[260px] xl:w-[350px]"
      />
    </div>
  );
}
