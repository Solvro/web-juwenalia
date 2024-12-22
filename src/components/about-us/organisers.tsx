"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { PersonCardList } from "@/components/about-us/person-card-list";
import { TabSelectorBar } from "@/components/about-us/tab-selector-bar";
import type { Organisation, Person } from "@/lib/types";

const ROLES = ["Organizatorzy", "Koordynatorzy", "Sztab"] as const;

const ORGANISERS: (Organisation[] | Person[])[] = [
  [
    {
      name: "Politechnika Wrocławska",
      url: "https://pwr.edu.pl",
      logo: "https://www.iskierkawroc.pl/wp-content/uploads/2019/04/logo-PWr-kolor-pion-bez-tla.png",
      logoScale: 0.4,
    },
    {
      name: "Uniwersytet Wrocławski",
      url: "https://uwr.edu.pl",
      logo: "https://www.ogrodbotaniczny.wroclaw.pl/images/bg/logo_uwr.png",
      logoScale: 0.85,
    },
    {
      name: "Uniwersytet Medyczny we Wrocławiu",
      url: "https://www.umw.edu.pl",
      logo: "https://www.wroclaw.pl/files/cumulus/1/__hidden/cms_document_fields/umed-mini.jpg",
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
  const [selectedIndex, setSelectedIndex] = useState<keyof typeof ROLES>(0);

  const section = ORGANISERS[selectedIndex as number];

  return (
    <>
      <TabSelectorBar
        options={ROLES}
        selectedIdx={selectedIndex}
        setSelectedIdx={setSelectedIndex}
      />
      {isOrganisationArray(section) ? (
        // TODO: Convert into carousel
        <ul className="grid grid-cols-2 items-center gap-x-4 gap-y-5 sm:gap-x-8 md:grid-cols-3 md:gap-x-12 lg:grid-cols-4 lg:gap-x-16 xl:grid-cols-5 xl:gap-x-20 2xl:gap-x-24">
          {section.map((organisation) => (
            <li
              key={`organiser-${organisation.name}`}
              className="grid w-full place-items-center"
            >
              <Link
                href={organisation.url}
                className="group flex gap-2 lg:text-lg xl:text-xl 2xl:text-2xl"
                target="_blank"
              >
                <Image
                  src={organisation.logo}
                  alt={organisation.name}
                  width={150}
                  height={0}
                  style={{
                    transform: `scale(${organisation.logoScale?.toString() ?? "1"})`,
                  }}
                />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <PersonCardList people={section} />
      )}
    </>
  );
}
