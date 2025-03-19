"use client";

import Image from "next/image";

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
        className={`text-balance bg-gradient-to-r from-[#58C473] to-[#049BAD] bg-clip-text font-extrabold text-transparent ${className}`}
      >
        {text}
      </span>
      <br />
    </>
  );
}

function NoArtistInfo({ errorMessage }: NoDataInfoProps) {
  return (
    <>
      <Image
        className="mt-32 sm:hidden lg:hidden xl:hidden 2xl:hidden"
        src="/UI/liść-i-liany-góra.svg"
        alt="liść i liany"
        width={230}
        height={0}
      />
      <Image
        className="hidden sm:mt-32 sm:block md:hidden lg:hidden xl:hidden 2xl:hidden"
        src="/UI/liść-i-liany-góra.svg"
        alt="liść i liany"
        width={260}
        height={0}
      />
      <Image
        className="hidden md:mt-32 md:block lg:hidden xl:hidden 2xl:hidden"
        src="/UI/liść-i-liany-góra.svg"
        alt="liść i liany"
        width={360}
        height={0}
      />
      <Image
        className="hidden lg:mt-32 lg:block xl:hidden 2xl:hidden"
        src="/UI/liść-i-liany-góra.svg"
        alt="liść i liany"
        width={460}
        height={0}
      />
      <Image
        className="hidden xl:mt-32 xl:block 2xl:hidden"
        src="/UI/liść-i-liany-góra.svg"
        alt="liść i liany"
        width={560}
        height={0}
      />
      <Image
        className="hidden 2xl:mt-32 2xl:block"
        src="/UI/liść-i-liany-góra.svg"
        alt="liść i liany"
        width={660}
        height={0}
      />

      <Image
        className="absolute right-0 -mt-16 sm:hidden lg:hidden xl:hidden 2xl:hidden"
        src="/UI/paprotki.svg"
        alt="paprotki"
        width={80}
        height={0}
      />
      <Image
        className="hidden sm:absolute sm:right-0 sm:-mt-32 sm:block md:hidden lg:hidden xl:hidden 2xl:hidden"
        src="/UI/paprotki.svg"
        alt="paprotki"
        width={160}
        height={0}
      />
      <Image
        className="hidden md:absolute md:right-0 md:-mt-40 md:block lg:hidden xl:hidden 2xl:hidden"
        src="/UI/paprotki.svg"
        alt="paprotki"
        width={210}
        height={0}
      />
      <Image
        className="hidden lg:absolute lg:right-0 lg:-mt-60 lg:block xl:hidden 2xl:hidden"
        src="/UI/paprotki.svg"
        alt="paprotki"
        width={260}
        height={0}
      />
      <Image
        className="hidden xl:absolute xl:right-0 xl:-mt-64 xl:block 2xl:hidden"
        src="/UI/paprotki.svg"
        alt="paprotki"
        width={310}
        height={0}
      />
      <Image
        className="hidden 2xl:absolute 2xl:right-0 2xl:-mt-64 2xl:block"
        src="/UI/paprotki.svg"
        alt="paprotki"
        width={360}
        height={0}
      />

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

      <Image
        className="absolute left-5 -mt-16 sm:hidden lg:hidden xl:hidden 2xl:hidden"
        src="/UI/nutki.svg"
        alt="nutki"
        width={100}
        height={0}
      />
      <Image
        className="hidden sm:absolute sm:left-5 sm:-mt-16 sm:block md:hidden lg:hidden xl:hidden 2xl:hidden"
        src="/UI/nutki.svg"
        alt="nutki"
        width={130}
        height={0}
      />
      <Image
        className="hidden md:absolute md:left-5 md:-mt-40 md:block lg:hidden xl:hidden 2xl:hidden"
        src="/UI/nutki.svg"
        alt="nutki"
        width={200}
        height={0}
      />
      <Image
        className="hidden lg:absolute lg:left-5 lg:-mt-64 lg:block xl:hidden 2xl:hidden"
        src="/UI/nutki.svg"
        alt="nutki"
        width={240}
        height={0}
      />
      <Image
        className="hidden xl:absolute xl:left-5 xl:-mt-64 xl:block 2xl:hidden"
        src="/UI/nutki.svg"
        alt="nutki"
        width={270}
        height={0}
      />
      <Image
        className="hidden 2xl:absolute 2xl:left-5 2xl:-mt-80 2xl:block"
        src="/UI/nutki.svg"
        alt="nutki"
        width={300}
        height={0}
      />

      <Image
        className="absolute right-5 mt-16 sm:hidden lg:hidden xl:hidden 2xl:hidden"
        src="/UI/liść-dół.svg"
        alt="egzotyczne liście"
        width={130}
        height={0}
      />
      <Image
        className="hidden sm:absolute sm:right-5 sm:mt-12 sm:block md:hidden lg:hidden xl:hidden 2xl:hidden"
        src="/UI/liść-dół.svg"
        alt="egzotyczne liście"
        width={165}
        height={0}
      />
      <Image
        className="hidden md:absolute md:right-5 md:mt-2 md:block lg:hidden xl:hidden 2xl:hidden"
        src="/UI/liść-dół.svg"
        alt="egzotyczne liście"
        width={250}
        height={0}
      />
      <Image
        className="hidden lg:absolute lg:right-5 lg:-mt-4 lg:block xl:hidden 2xl:hidden"
        src="/UI/liść-dół.svg"
        alt="egzotyczne liście"
        width={290}
        height={0}
      />
      <Image
        className="hidden xl:absolute xl:right-5 xl:-mt-10 xl:block 2xl:hidden"
        src="/UI/liść-dół.svg"
        alt="egzotyczne liście"
        width={340}
        height={0}
      />
      <Image
        className="hidden 2xl:absolute 2xl:right-5 2xl:-mt-16 2xl:block"
        src="/UI/liść-dół.svg"
        alt="egzotyczne liście"
        width={390}
        height={0}
      />
    </>
  );
}

export { NoArtistInfo };
