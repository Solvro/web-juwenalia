"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

import { StaticMap } from "@/components/static-map";

const DynamicInteractiveMap = dynamic(
  async () =>
    import("@/components/interactive-map").then(
      (module_) => module_.InteractiveMap,
    ),
  {
    ssr: false,
  },
);

export default function Page() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicInteractiveMap />
      </Suspense>
      <StaticMap />
    </div>
  );
}
