"use client";

import { useState } from "react";

import { TabSelectorBar } from "@/components/about-us/tab-selector-bar";
import type { ArrayIndex, Organisation } from "@/lib/types";

import { OrganisationDisplay } from "./organisation-display";

const PARTNER_TYPES = ["Główni", "Medialni"] as const;

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
  //I have no idea how partners should look like. It's only a placeholder for showing data from directus (it's copied from organisers.tsx )
  return (
    <>
      <TabSelectorBar
        options={PARTNER_TYPES}
        selectedIdx={selectedIndex}
        setSelectedIdx={setSelectedIndex}
      />

      <OrganisationDisplay forDisplay={section} />
    </>
  );
}
