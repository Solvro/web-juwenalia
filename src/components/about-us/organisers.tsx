"use client";

import Image from "next/image";
import { useState } from "react";

import { TabSelectorBar } from "@/components/about-us/tab-selector-bar";
import type { ArrayIndex, Organisation } from "@/lib/types";

import { LeafComponent } from "../leaf-component";
import { OrganisationDisplay } from "./organisation-display";

const ROLES = ["Uczelnie", "Samorządy"] as const;

export function OrganisersList({
  universities,
  studentOrganisations,
}: {
  universities: Organisation[];
  studentOrganisations: Organisation[];
}) {
  const [selectedIndex, setSelectedIndex] =
    useState<ArrayIndex<typeof ROLES>>(0);

  return (
    <div className="relative">
      <LeafComponent className="absolute left-0 top-[-180px] -z-10 sm:top-[-170px] md:left-[-10px] md:top-[-220px] lg:left-[-10px] lg:top-[-255px] xl:left-[-20px] xl:top-[-280px]">
        <Image
          src="/bushes/tornado-2.svg"
          alt=""
          className="w-[80px] sm:w-[70px] md:w-[125px] lg:w-[160px] xl:w-[180px]"
          width={48}
          height={20}
        />
      </LeafComponent>
      <LeafComponent className="absolute left-[80px] top-[-155px] -z-10 sm:top-[-145px] md:left-[95px] md:top-[-170px] lg:left-[110px] lg:top-[-195px] xl:left-[130px] xl:top-[-220px]">
        <Image
          src="/bushes/fire-1.svg"
          alt=""
          className="w-[80px] sm:w-[70px] md:w-[105px] lg:w-[130px] xl:w-[150px]"
          width={48}
          height={20}
        />
      </LeafComponent>

      <LeafComponent className="absolute right-[-30px] top-[-100px] lg:right-[-50px] xl:right-[-65px]">
        <Image
          src="/bushes/fire-2.svg"
          alt=""
          className="w-[90px] md:w-[115px] lg:w-[100px] xl:w-[140px]"
          width={48}
          height={20}
        />
      </LeafComponent>
      <TabSelectorBar
        options={ROLES}
        selectedIdx={selectedIndex}
        setSelectedIdx={setSelectedIndex}
      />
      <OrganisationDisplay
        organisations={
          selectedIndex === 0 ? universities : studentOrganisations
        }
      />
    </div>
  );
}
