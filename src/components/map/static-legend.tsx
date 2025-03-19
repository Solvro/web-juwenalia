import type { MapLevel } from "@/lib/types";
import { cn } from "@/lib/utils";

export function StaticLegend({
  activeLevel,
  className,
}: {
  activeLevel: MapLevel;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-2 gap-y-2 px-5 sm:grid-cols-[repeat(3,minmax(0,1fr))] sm:px-0",
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
    </div>
  );
}
