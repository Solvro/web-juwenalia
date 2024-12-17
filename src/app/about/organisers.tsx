"use client";

import { useState } from "react";

import { PersonCardList } from "@/components/about/person-card-list";
import { TabSelectorBar } from "@/components/about/tab-selector-bar";
import type { Person } from "@/lib/types";

const ROLES = ["Organizatorzy", "Koordynatorzy", "Sztab"] as const;

const ORGANISERS: (string[] | Person[])[] = [
  [
    "Politechnika Wrocławska",
    "Uniwersytet Wrocławski",
    "Wrocławski Uniwersytet Medyczny",
  ],
  [
    { name: "Konrad Guzek", role: "Lider projektu", image: "konrad-guzek.jpg" },
    {
      name: "Kamil Nowak",
      role: "Koordynator ds. Współpracy Zewnętrznej",
      image: "kamil-nowak.jpg",
    },
    {
      name: "Krzysztof Krawczyk",
      role: "Koordynator ds. Logistyki",
      image: "krzysztof-krawczyk.jpg",
    },
  ],
  [
    { name: "Jan Kowalski", role: "Sztab", image: "jan-kowalski.jpg" },
    { name: "Andrzej Nowak", role: "Sztab", image: "andrzej-nowak.jpg" },
    {
      name: "Krzysztof Krawczyk",
      role: "Sztab",
      image: "krzysztof-krawczyk.jpg",
    },
  ],
];

const isNameArray = (array: string[] | Person[]): array is string[] =>
  typeof array[0] === "string";

export function OrganisersList() {
  const [selectedIndex, setSelectedIndex] = useState<keyof typeof ROLES>(0);

  const section = ORGANISERS[selectedIndex as number];

  return (
    <>
      <TabSelectorBar
        options={ROLES}
        selectedIdx={selectedIndex}
        setSelectedIdx={setSelectedIndex}
      />
      {isNameArray(section) ? (
        <ul className="mt-10 flex flex-col gap-2 gap-y-5">
          {section.map((name) => (
            <li key={`organiser-${name}`}>{name}</li>
          ))}
        </ul>
      ) : (
        <PersonCardList people={section} />
      )}
    </>
  );
}
