"use client";

import { useState } from "react";

import { PersonCardList } from "@/components/about-us/person-card-list";
import { TabSelectorBar } from "@/components/about-us/tab-selector-bar";
import type { ArrayIndex, Person } from "@/lib/types";

const CREATORS: Person[] = [
  { name: "Adrian Iskra", role: "UI/UX", edition: "2026" },
  { name: "Barbara Cząstkiewicz", role: "UI/UX", edition: "2026" },
  { name: "Dawid Kowal", role: "Frontend", edition: "2026" },
  { name: "Jakub Dołharz", role: "Frontend", edition: "2026" },
  {
    name: "Jan Goleński",
    role: "Project Manager",
    generalRole: "PM & TL",
    edition: "2026",
  },
  { name: "Konrad Guzek", role: "Frontend", edition: "2026" },
  { name: "Miłosz Kowalczyk", role: "Frontend", edition: "2026" },
  {
    name: "Pola Abramowicz",
    role: "Tech Lead",
    generalRole: "PM & TL",
    edition: "2026",
  },
  { name: "Tymon Jędryczka", role: "Frontend", edition: "2026" },
];

const ROLES = ["Wszyscy", "Frontend", "UI/UX", "PM & TL"] as const;

const getSurname = (person: Person) =>
  person.name.split(" ").at(-1) ?? person.name;

/** To be used when sorting an array of `Person`. Currently sorts by surname in ascending alphabetical order. */
const comparePeople = (a: Person, b: Person) =>
  getSurname(a).localeCompare(getSurname(b));

export function CreatorsList() {
  const [selectedIndex, setSelectedIndex] =
    useState<ArrayIndex<typeof ROLES>>(0);
  const role = ROLES[selectedIndex];

  const creators =
    selectedIndex === 0
      ? CREATORS
      : CREATORS.filter(
          (creator) => role === (creator.generalRole ?? creator.role),
        );

  return (
    <>
      <TabSelectorBar
        options={ROLES}
        selectedIdx={selectedIndex}
        setSelectedIdx={setSelectedIndex}
      />
      <PersonCardList people={creators.toSorted(comparePeople)} />
    </>
  );
}
