"use client";

import { Button } from "@/components/button";
import { PaddingWrapper } from "@/components/padding-wrapper";

const handleReload = () => {
  window.location.reload();
};

export function TicketsComingSoon() {
  return (
    <PaddingWrapper className="my-24 grid w-full place-items-center bg-gradient-main py-16 md:my-32 md:min-h-[40svh] md:py-20 lg:my-48 lg:py-24">
      <div className="flex h-full w-full flex-col gap-1 md:gap-16 lg:flex-row lg:justify-between lg:gap-32">
        <h2 className="flex flex-col text-5xl font-black uppercase text-white sm:text-7xl md:text-8xl">
          <span>bilety już</span>
          <span className="text-[53px] sm:text-[79px] md:text-[105px]">
            wkrótce
          </span>
        </h2>
        <div className="relative my-auto mt-5 flex w-full flex-col gap-10 md:my-0 lg:mx-auto lg:w-fit">
          <div className="flex max-w-[600px] flex-col sm:gap-1.5 md:gap-1">
            <p className="text-white md:text-lg lg:text-xl">
              Bilety nie są jeszcze dostępne.
            </p>
            <p className="text-white md:text-lg lg:text-xl">
              Wróć tutaj później!
            </p>
          </div>

          <Button onClick={handleReload} variantColor="white">
            odśwież
          </Button>
        </div>
      </div>
    </PaddingWrapper>
  );
}
