import type { MapLevel } from "@/lib/types";
import { cn } from "@/lib/utils";

import { PaddingWrapper } from "../padding-wrapper";

export function StaticLegend({
  activeLevel,
  className,
}: {
  activeLevel: MapLevel;
  className?: string;
}) {
  return (
    <PaddingWrapper
      className={cn(
        "mx-auto grid w-[90%] grid-cols-2 gap-y-2 sm:grid-cols-[repeat(3,minmax(0,1fr))] md:w-max",
        className,
      )}
    >
      {activeLevel.nodes.map((node) => (
        <div key={node.name} className="flex w-fit items-center">
          <div
            className="mr-2 h-4 w-4 rounded-full"
            style={{ backgroundColor: node.color }}
          />
          <p className="w-fit text-[3vw] sm:text-base">{node.name}</p>
        </div>
      ))}
    </PaddingWrapper>
  );
}
