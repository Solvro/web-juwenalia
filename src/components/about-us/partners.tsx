"use client";

import { useState } from "react";

import { TabSelectorBar } from "@/components/about-us/tab-selector-bar";

const PARTNER_TYPES = ["Główni", "Medialni"] as const;

function PartnerSkeleton({ index, total }: { index: number; total: number }) {
  const animationDelay = `${(index * 500).toString()}ms`;
  const animationDuration = `${(total * 500).toString()}ms`;
  return (
    <div
      className="w-[100px] animate-pulse rounded-full bg-neutral-300 p-5 sm:w-[150px] sm:py-6 lg:w-[200px] lg:py-7"
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
        selectedIdx={selectedIdx}
        setSelectedIdx={setSelectedIdx}
      />
      <div className="mt-6 flex flex-wrap justify-center gap-x-2 gap-y-5 md:gap-x-3 md:gap-y-6 lg:gap-x-4 lg:gap-y-7">
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
