"use client";

import { useState } from "react";

import { PersonCardList } from "@/components/about-us/person-card-list";
import { TabSelectorBar } from "@/components/about-us/tab-selector-bar";
import type { ArrayIndex, Organisation, Person } from "@/lib/types";

import { OrganisationDisplay } from "./organisation-display";

const ROLES = ["Organizatorzy", "Sztab"] as const;

export function OrganisersList({
  organisers,
  staff,
}: {
  organisers: Organisation[];
  staff: Person[];
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
      {selectedIndex === 0 ? (
        // TODO: Convert into carousel
        <OrganisationDisplay forDisplay={organisers} />
      ) : (
        <PersonCardList people={staff} />
      )}
    </>
  );
}
