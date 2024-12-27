import ReactNode from "react";

import { cn } from "@/lib/utils";

type MapFloorsButtonProps = {
  text: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
};

export function MapFloorsButton({
  text,
  icon,
  active,
  ...props
}: MapFloorsButtonProps) {
  return (
    <button
      className={cn(
        "mx-auto h-16 w-[90%] rounded-2xl border-0 sm:h-20 sm:w-full",
        active
          ? "bg-gradient-to-r from-[#58C473] to-[#049BAD]"
          : "border-2 border-gray-400",
      )}
      {...props}
    >
      <div
        className={cn(
          "mx-auto h-[calc(4rem-5px)] w-[calc(100%-5px)] rounded-[0.9rem] sm:h-[calc(5rem-5px)] sm:w-[calc(100%-5px)]",
          active ? "bg-white/85" : "",
        )}
      >
        <div className="grid h-full w-full grid-cols-[minmax(80px,_1fr)_minmax(calc(100%-50px),_1fr)]">
          <div className="mx-auto my-auto overflow-hidden">{icon}</div>
          <span className="w-[calc(100%-2.5rem)] self-center text-wrap text-left text-muted-foreground">
            {text}
          </span>
        </div>
      </div>
    </button>
  );
}
