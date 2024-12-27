import { cn } from "@/lib/utils";

interface LegendProps {
  items: {
    text: string;
    color: string;
  }[];
  className?: string;
}

export function Legend({ items, className }: LegendProps) {
  return (
    <div
      className={cn(
        "mx-auto grid w-fit grid-cols-2 gap-x-28 gap-y-2 sm:gap-x-4",
        className,
      )}
    >
      {items.map((item) => (
        <div key={item.text} className="flex items-center">
          <div
            className="mr-2 h-4 w-4 rounded-full"
            style={{ backgroundColor: item.color }}
          />
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
}
