"use client";

import type { NoDataInfoProps } from "@/lib/types";

import { Button } from "./button";

const handleReload = () => {
  window.location.reload();
};

function NoDataInfo({ errorTitle, errorMessage }: NoDataInfoProps) {
  return (
    <div className="flex w-full flex-col items-center gap-3">
      <h3 className="text-balance text-lg font-bold">{errorTitle}</h3>
      <p className="max-w-[250px] text-center sm:w-90 md:max-w-[400px]">
        {errorMessage}
      </p>
      <Button onClick={handleReload}>odśwież</Button>
    </div>
  );
}

export { NoDataInfo };
