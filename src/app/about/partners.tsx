"use client";

import { TabSelectorBar } from "@/components/about/tab-selector-bar";
import { useState } from "react";

const PARTNER_TYPES = ["Główni", "Medialni"] as const;

function PartnerSkeleton() {
  return <div className="w-[100px] rounded-full bg-neutral-300 p-5"></div>;
}

export function PartnersList() {
  const [selectedIdx, setSelectedIdx] = useState<keyof typeof PARTNER_TYPES>(0);
  return (
    <>
      <TabSelectorBar
        options={PARTNER_TYPES}
        selectedIdx={selectedIdx}
        setSelectedIdx={setSelectedIdx}
      />
      <div className="mt-6 flex flex-wrap gap-2 gap-y-5">
        {Array.from({ length: 6 - (selectedIdx as number) * 2 }).map(
          (_, idx) => (
            <PartnerSkeleton key={idx} />
          ),
        )}
      </div>
    </>
  );
}
