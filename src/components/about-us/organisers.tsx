"use client";

import { useState } from "react";

import { TabSelectorBar } from "@/components/about-us/tab-selector-bar";
import type { ArrayIndex, Organisation } from "@/lib/types";

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
    <>
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
    </>
  );
}
