"use client";

import { useState } from "react";

import { TabSelectorBar } from "@/components/about/tab-selector-bar";

const PARTNER_TYPES = ["Główni", "Medialni"] as const;

function PartnerSkeleton({ index, total }: { index: number; total: number }) {
  const animationDelay = `${(index * 500).toString()}ms`;
  const animationDuration = `${(total * 500).toString()}ms`;
  return (
    <div
      className="w-[100px] animate-pulse rounded-full bg-neutral-300 p-5"
      style={{ animationDelay, animationDuration }}
    ></div>
  );
}

export function PartnersList() {
  const [selectedIndex, setSelectedIndex] =
    useState<keyof typeof PARTNER_TYPES>(0);
  const skeletonsLength = 8 + (selectedIndex as number) * 3;
  return (
    <>
      <TabSelectorBar
        options={PARTNER_TYPES}
        selectedIdx={selectedIndex}
        setSelectedIdx={setSelectedIndex}
      />
      <div className="mt-6 flex flex-wrap gap-2 gap-y-5">
        {[...Array.from({ length: skeletonsLength }).keys()].map(
          (value, index) => (
            <PartnerSkeleton
              key={value}
              index={index}
              total={skeletonsLength}
            />
          ),
        )}
      </div>
    </>
  );
}
