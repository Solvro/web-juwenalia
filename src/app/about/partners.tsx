"use client";

import { useState } from "react";

import { TabSelectorBar } from "@/components/about/tab-selector-bar";

const PARTNER_TYPES = ["Główni", "Medialni"] as const;

function PartnerSkeleton() {
  return <div className="w-[100px] rounded-full bg-neutral-300 p-5"></div>;
}

export function PartnersList() {
  const [selectedIndex, setSelectedIndex] =
    useState<keyof typeof PARTNER_TYPES>(0);
  return (
    <>
      <TabSelectorBar
        options={PARTNER_TYPES}
        selectedIdx={selectedIndex}
        setSelectedIdx={setSelectedIndex}
      />
      <div className="mt-6 flex flex-wrap gap-2 gap-y-5">
        {[
          ...Array.from({ length: 6 - (selectedIndex as number) * 2 }).keys(),
        ].map((value) => (
          <PartnerSkeleton key={value} />
        ))}
      </div>
    </>
  );
}
