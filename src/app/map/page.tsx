"use client"

import StaticMap from "@/components/StaticMap";

// import InteractiveMap from "@/components/InteractiveMap";

// import dynamic from "next/dynamic";

// const DynamicInteractiveMap = dynamic(() => import("@/components/InteractiveMap"), {
//   ssr: false,
// });

export default function Page() {
  return (
    <div>
      {/* <DynamicInteractiveMap /> */}
      {/* <InteractiveMap /> */}
      <StaticMap />
    </div>
  );
}