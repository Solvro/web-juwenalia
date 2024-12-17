"use client";
import { useState } from "react";

import { Person } from "@/lib/types";
import { PersonCardList } from "@/components/about/person-card-list";
import { TabSelectorBar } from "@/components/about/tab-selector-bar";

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

export function OrganisersList() {
  const [selectedIdx, setSelectedIdx] = useState<keyof typeof ROLES>(0);

  const section = ORGANISERS[selectedIdx as number];
  const isNameArray = typeof section[0] === "string";

  return (
    <>
      <TabSelectorBar
        options={ROLES}
        selectedIdx={selectedIdx}
        setSelectedIdx={setSelectedIdx}
      />
      {isNameArray ? (
        <ul className="mt-10 flex flex-col gap-2 gap-y-5">
          {section.map((name, idx) => (
            <li key={idx}>{name as string}</li>
          ))}
        </ul>
      ) : (
        <PersonCardList people={section as Person[]} />
      )}
    </>
  );
}
