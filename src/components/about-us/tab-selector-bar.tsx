import { useEffect, useRef, useState } from "react";
import type { CSSProperties, MouseEvent, RefObject } from "react";

import type { ArrayIndex } from "@/lib/types";

function TabSelector<T>({
  text,
  idx,
  selectedIdx,
  onClick,
  refObject,
}: {
  text: string;
  idx: T;
  selectedIdx: T;
  onClick: (event: MouseEvent<HTMLButtonElement>, index: T) => void;
  refObject?: RefObject<HTMLButtonElement>;
}) {
  const isSelected = idx === selectedIdx;
  return (
    <li className="w-auto">
      <button
        className={`group bg-transparent px-4 py-2 text-base md:px-5 ${isSelected ? "rounded-full text-white" : "text-black"} transition-colors duration-300 lg:px-5 lg:py-3`}
        onClick={(event) => {
          onClick(event, idx);
        }}
        ref={refObject}
      >
        {text}
      </button>
    </li>
  );
}

export function TabSelectorBar<T extends readonly string[]>({
  options,
  selectedIdx,
  setSelectedIdx,
}: {
  options: T;
  selectedIdx: ArrayIndex<T>;
  setSelectedIdx: React.Dispatch<React.SetStateAction<ArrayIndex<T>>>;
}) {
  const [markerStyle, setMarkerStyle] = useState<CSSProperties>({});
  const markerRef = useRef<HTMLDivElement | null>(null);
  const initialSelectedRef = useRef<HTMLButtonElement | null>(null);

  function updateMarkerStyle(button: HTMLButtonElement | null) {
    setMarkerStyle({
      width: button?.offsetWidth,
      height: button?.offsetHeight,
      left: button?.offsetLeft,
      top: button?.offsetTop,
    });
  }

  useEffect(() => {
    function updateStyle() {
      updateMarkerStyle(initialSelectedRef.current);
    }
    updateStyle();
    window.addEventListener("resize", updateStyle);

    return () => {
      window.removeEventListener("resize", updateStyle);
    };
  }, [initialSelectedRef]);

  function onSwitchTab(
    event: MouseEvent<HTMLButtonElement>,
    index: ArrayIndex<T>,
  ) {
    setSelectedIdx(index);
    updateMarkerStyle(event.currentTarget);
  }

  return (
    <ul className="relative flex flex-wrap gap-1 sm:justify-start">
      <div
        className="absolute bottom-0 -z-10 h-full w-auto rounded-full bg-gradient-main text-white transition-all duration-300"
        ref={markerRef}
        style={markerStyle}
      />
      {options.map((option, index) => (
        <TabSelector
          key={option}
          idx={index as ArrayIndex<typeof options>}
          selectedIdx={selectedIdx}
          text={option}
          onClick={onSwitchTab}
          refObject={index === selectedIdx ? initialSelectedRef : undefined}
        />
      ))}
    </ul>
  );
}
