"use client";

import Image from "next/image";

import { LeafComponent } from "@/components/leaf-component";
import { PaddingWrapper } from "@/components/padding-wrapper";

export function FaqWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative bottom-[-8rem] mt-28 sm:mt-36">
      <h1 className="overflow-wrap w-10/12 pb-3 text-3xl font-semibold leading-10 sm:pb-8 sm:text-3xl sm:font-extrabold md:text-4xl lg:text-5xl xl:text-6xl">
        <PaddingWrapper>Najczęściej zadawane pytania</PaddingWrapper>
      </h1>

      <PaddingWrapper className="border-t border-gray-300 pb-32 pt-8 sm:pb-40 md:pt-16">
        {children}
      </PaddingWrapper>

      <LeafComponent className="absolute right-0 top-[-120px] z-[1] flex sm:top-[-130px]">
        <Image
          src="/schedule-leaves/leaves-3.svg"
          alt="dekoracyjne liście"
          width={80}
          height={150}
          className="w-20 scale-x-[-1] scale-y-[-1] sm:w-24 md:w-28 lg:w-32 xl:w-36"
        />
      </LeafComponent>
      <LeafComponent className="absolute bottom-0 right-2/3 z-[1] flex justify-end">
        <Image
          src="/no-map-info/branch_br.svg"
          alt="dekoracyjne liście"
          width={100}
          height={80}
          className="w-32 sm:w-40 md:w-44 lg:w-52 xl:w-56"
        />
      </LeafComponent>
    </section>
  );
}
