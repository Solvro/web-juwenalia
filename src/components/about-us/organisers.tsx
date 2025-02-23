"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { PersonCardList } from "@/components/about-us/person-card-list";
import { TabSelectorBar } from "@/components/about-us/tab-selector-bar";
import { API_URL } from "@/config/api";
import type { ArrayIndex, Organisation, Person } from "@/lib/types";

const ROLES = ["Organizatorzy", "Koordynatorzy", "Sztab"] as const;

const isOrganisationArray = (
  array: Organisation[] | Person[],
): array is Organisation[] => "url" in array[0];

export function OrganisersList({
  allOrganisers,
}: {
  allOrganisers: (Organisation[] | Person[])[];
}) {
  const [selectedIndex, setSelectedIndex] =
    useState<ArrayIndex<typeof ROLES>>(0);
  const ORGANISERS: (Organisation[] | Person[])[] = allOrganisers;
  const section = ORGANISERS[selectedIndex];
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
                  src={`${API_URL}/assets/${organisation.logo}`}
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
