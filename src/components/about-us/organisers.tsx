"use client";

import { useState } from "react";

import { PersonCardList } from "@/components/about-us/person-card-list";
import { TabSelectorBar } from "@/components/about-us/tab-selector-bar";
import type { ArrayIndex, Organisation, Person } from "@/lib/types";

import { OrganisationDisplay } from "./organisation-display";

const ROLES = ["Organizatorzy", "Koordynatorzy", "Sztab"] as const;

export function OrganisersList({
  organisators,
  coordinators,
  staff,
}: {
  organisators: Organisation[];
  coordinators: Person[];
  staff: Person[];
}) {
  const [selectedIndex, setSelectedIndex] =
    useState<ArrayIndex<typeof ROLES>>(0);
  const section = selectedIndex === 1 ? coordinators : staff;

  return (
    <>
      <TabSelectorBar
        options={ROLES}
        selectedIdx={selectedIndex}
        setSelectedIdx={setSelectedIndex}
      />
      {selectedIndex === 0 ? (
        // TODO: Convert into carousel
        <OrganisationDisplay forDisplay={organisators} />
      ) : (
        <PersonCardList people={section} />
      )}
    </>
  );
}
