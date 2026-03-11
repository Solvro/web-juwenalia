"use client";

import { useState } from "react";

import { TabSelectorBar } from "@/components/about-us/tab-selector-bar";
import type { ArrayIndex, Person } from "@/lib/types";

import { PersonCardList } from "./person-card-list";

const ROLES = ["Sztab", "Twórcy strony"] as const;

export function TeamList({
  staff,
  creators,
}: {
  staff: Person[];
  creators: Person[];
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
      <PersonCardList people={selectedIndex === 0 ? staff : creators} />
    </>
  );
}
