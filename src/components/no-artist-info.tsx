"use client";

import type { NoDataInfoProps } from "@/lib/types";

import { Button } from "./button";

const handleReload = () => {
  window.location.reload();
};

function GradientText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <>
      <span
        className={`text-balance bg-gradient-main bg-clip-text font-extrabold text-transparent ${className}`}
      >
        {text}
      </span>
      <br />
    </>
  );
}

function NoArtistInfo({ errorMessage }: NoDataInfoProps) {
  return (
    <div className="flex flex-col items-center gap-2 py-12 text-xs sm:gap-3 sm:text-sm md:text-base">
      <h3 className="w-9/10 text-center sm:text-lg md:text-xl">
        <GradientText
          text="ARTYŚCI"
          className="text-6xl md:text-8xl lg:text-[150px]"
        />
        <GradientText
          text="POJAWIĄ SIĘ"
          className="text-4xl md:text-6xl lg:text-[100px]"
        />
        <GradientText
          text="JUŻ WKRÓTCE"
          className="text-4xl md:text-6xl lg:text-[90px]"
        />
      </h3>
      <p className="mb-2 mt-8 max-w-[250px] text-center sm:w-90 md:max-w-[400px]">
        {errorMessage}
      </p>
      <Button onClick={handleReload}>odśwież</Button>
    </div>
  );
}

export { NoArtistInfo };
