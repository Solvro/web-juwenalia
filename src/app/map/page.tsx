"use client";

import { NoMapInfo } from "@/components/map/no-map-info";

// switch out NoMapInfo for Map when readxy
// import { Map } from "@/components/map/map";

export default function Page() {
  return (
    <div className="mt-48">
      <NoMapInfo />
    </div>
  );
}
