"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { PersonCardList } from "@/components/about-us/person-card-list";
import { TabSelectorBar } from "@/components/about-us/tab-selector-bar";
import type { Organisation, Person } from "@/lib/types";

import { Underlined } from "../underlined";

const ROLES = ["Organizatorzy", "Koordynatorzy", "Sztab"] as const;

const ORGANISERS: (Organisation[] | Person[])[] = [
  [
    { name: "Politechnika Wrocławska", url: "https://pwr.edu.pl" },
    { name: "Uniwersytet Wrocławski", url: "https://uwr.edu.pl" },
    {
      name: "Uniwersytet Medyczny we Wrocławiu",
      url: "https://www.umw.edu.pl",
    },
  ],
  [
    { name: "Konrad Guzek", role: "Lider projektu" },
    {
      name: "Kamil Nowak",
      role: "Koordynator ds. Współpracy Zewnętrznej",
    },
    {
      name: "Krzysztof Krawczyk",
      role: "Koordynator ds. Logistyki",
      image: "krzysztof-krawczyk.jpg",
    },
  ],
  [
    { name: "Jan Kowalski", role: "Sztab" },
    { name: "Andrzej Nowak", role: "Sztab" },
    {
      name: "Krzysztof Krawczyk",
      role: "Sztab",
      image: "krzysztof-krawczyk.jpg",
    },
  ],
];

const isOrganisationArray = (
  array: Organisation[] | Person[],
): array is Organisation[] => "url" in array[0];

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
      {isOrganisationArray(section) ? (
        <ul className="mt-10 flex flex-col gap-2 gap-y-5">
          {section.map((organisation) => (
            <li key={`organiser-${organisation.name}`}>
              <Link
                href={organisation.url}
                className="group flex w-fit gap-2 lg:text-lg xl:text-xl 2xl:text-2xl"
                target="_blank"
              >
                <ArrowUpRight />
                <Underlined>{organisation.name}</Underlined>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <PersonCardList people={section as Person[]} />
      )}
    </>
  );
}
