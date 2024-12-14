"use client"

import { NoDataInfoProps } from "@/lib/types";
import { Button } from "./button";

const NoDataInfo = ({ errorTitle, errorMessage }: NoDataInfoProps) => {

  const handleReload = () => {
    window.location.reload()
  };

  return (
    <div className="align-center flex flex-col items-center">
      <h3 className="mb-5 text-lg font-bold">{errorTitle}</h3>
      <p className="sm:w-90 mb-5 w-80 text-center">{errorMessage}</p>
      <Button
        className="rounded-[100px] border-black font-medium"
        variant="outline"
        onClick={handleReload}
      >
        odśwież
      </Button>
    </div>
  );
};

export { NoDataInfo };
