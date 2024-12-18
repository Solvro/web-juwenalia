"use client";

import type { NoDataInfoProps } from "@/lib/types";

import { Button } from "./button";

const handleReload = () => {
  window.location.reload();
};

function NoDataInfo({ errorTitle, errorMessage }: NoDataInfoProps) {
  return (
    <div className="align-center flex flex-col items-center">
      <h3 className="mb-5 text-lg font-bold">{errorTitle}</h3>
      <p className="sm:w-90 mb-5 w-80 text-center">{errorMessage}</p>
      <Button onClick={handleReload}>odśwież</Button>
    </div>
  );
}

export { NoDataInfo };
