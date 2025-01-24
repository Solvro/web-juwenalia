"use client";

import type { NoDataInfoProps } from "@/lib/types";

import { Button } from "./button";

const handleReload = () => {
  window.location.reload();
};

function NoDataInfo({ errorTitle, errorMessage }: NoDataInfoProps) {
  return (
    <div className="flex w-full flex-col items-center gap-2 py-12 text-xs sm:gap-3 sm:text-sm md:text-base">
      <h3 className="text-balance text-sm font-bold sm:text-lg md:text-xl">
        {errorTitle}
      </h3>
      <p className="max-w-[250px] text-center sm:w-90 md:max-w-[400px]">
        {errorMessage}
      </p>
      <Button onClick={handleReload}>odśwież</Button>
    </div>
  );
}

export { NoDataInfo };
