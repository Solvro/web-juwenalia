"use client";

import Image from "next/image";
import { useState } from "react";

import { TabSelectorBar } from "@/components/about-us/tab-selector-bar";
import type { ArrayIndex, Organisation } from "@/lib/types";

import { LeafComponent } from "../leaf-component";
import { OrganisationDisplay } from "./organisation-display";

const PARTNER_TYPES = ["Honorowi", "Medialni"] as const;

export function PartnersList({
  mainPartners,
  mediaPartners,
}: {
  mainPartners: Organisation[];
  mediaPartners: Organisation[];
}) {
  const [selectedIndex, setSelectedIndex] =
    useState<ArrayIndex<typeof PARTNER_TYPES>>(0);
  const section = selectedIndex === 0 ? mainPartners : mediaPartners;
  return (
    <div className="relative">
      <LeafComponent className="absolute left-[-20px] top-[-155px] -z-10 sm:top-[-150px] md:left-[-30px] md:top-[-180px] lg:left-[-50px] lg:top-[-215px] xl:left-[-70px] xl:top-[-240px]">
        <Image
          src="/bushes/land.svg"
          alt="About Us"
          className="w-[100px] sm:w-[90px] md:w-[150px] lg:w-[210px] xl:w-[230px]"
          width={48}
          height={20}
        />
      </LeafComponent>

      <LeafComponent className="absolute right-[-30px] top-0 max-md:hidden lg:right-[-50px] xl:right-[-65px]">
        <Image
          src="/bushes/wind-1.svg"
          alt="About Us"
          className="w-[90px] md:w-[80px] lg:w-[100px] xl:w-[120px]"
          width={48}
          height={20}
        />
      </LeafComponent>
      <TabSelectorBar
        options={PARTNER_TYPES}
        selectedIdx={selectedIndex}
        setSelectedIdx={setSelectedIndex}
      />

      <OrganisationDisplay organisations={section} />
    </div>
  );
}
