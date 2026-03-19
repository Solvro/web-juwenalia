"use client";

import { useState } from "react";

import { TabSelectorBar } from "@/components/about-us/tab-selector-bar";
import { TEAM_ROLES } from "@/config/tab-selector-headers";
import type { ArrayIndex, Person } from "@/lib/types";

import { PersonCardList } from "./person-card-list";

export function TeamList({
  staff,
  creators,
}: {
  staff: Person[];
  creators: Person[];
}) {
  const [selectedIndex, setSelectedIndex] =
    useState<ArrayIndex<typeof TEAM_ROLES>>(0);

  return (
    <>
      <TabSelectorBar
        options={TEAM_ROLES}
        selectedIdx={selectedIndex}
        setSelectedIdx={setSelectedIndex}
      />
      <PersonCardList people={selectedIndex === 0 ? staff : creators} />
    </>
  );
}
