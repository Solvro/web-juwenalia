"use client";

// switch out NoMapInfo for app/map/Map when ready
import { NoMapInfo } from "@/components/map/no-map-info";

export default function Page() {
  return (
    <div className="mt-48">
      <NoMapInfo />
    </div>
  );
}
