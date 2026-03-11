"use client";

import { Button } from "../button";

export function NoMapInfo() {
  return (
    <div className="relative -mb-32 flex w-full flex-col items-center text-center">
      <hr className="top-0 w-full" />

      {/* text and buttons */}
      <div className="z-10">
        <div className="mb-10 mt-36 font-extrabold leading-[95.625%] md:mt-72">
          <span className="bg-gradient-main bg-clip-text text-[32px] text-transparent sm:text-[54px] lg:text-[96px]">
            MAPA POJAWI SIĘ
          </span>
          <br />
          <br />
          <span className="bg-gradient-main bg-clip-text text-[39px] leading-[95.625%] text-transparent sm:text-[64px] lg:text-[115px]">
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
      {/* <hr className="bottom-0 w-full" /> */}
    </div>
  );
}
