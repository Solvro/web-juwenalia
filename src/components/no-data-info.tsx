"use client";

import type { NoDataInfoProps } from "@/lib/types";

import { Button } from "./ui/button";

const handleReload = () => {
  window.location.reload();
};

function NoDataInfo({ errorTitle, errorMessage }: NoDataInfoProps) {
  return (
    <div className="align-center flex flex-col items-center">
      <h3 className="mb-5 text-lg font-bold">{errorTitle}</h3>
      <p className="mb-5 w-80 text-center sm:w-90">{errorMessage}</p>
      <Button
        className="rounded-[100px] border-black font-medium"
        variant="outline"
        onClick={handleReload}
      >
        odśwież
      </Button>
    </div>
  );
}

export { NoDataInfo };
