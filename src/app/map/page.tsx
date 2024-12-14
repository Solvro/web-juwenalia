"use client";

import { StaticMap } from "@/components/StaticMap";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicInteractiveMap = dynamic(() => import("@/components/InteractiveMap").then(mod => mod.InteractiveMap), {
  ssr: false,
});

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
