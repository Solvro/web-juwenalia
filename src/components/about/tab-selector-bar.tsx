import { useEffect, useRef, useState } from "react";
import type { MouseEvent, RefObject } from "react";

import { Button } from "../ui/button";

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
    <li>
      <Button
        ref={refObject}
        className={`rounded-full bg-transparent text-xs ${isSelected ? "text-white" : "text-black"} transition-colors duration-300`}
        onClick={(event) => {
          onClick(event, idx);
        }}
      >
        {text}
      </Button>
    </li>
  );
}

export function TabSelectorBar<T extends readonly any[]>({
  options,
  selectedIdx,
  setSelectedIdx,
}: {
  options: T;
  selectedIdx: keyof T;
  setSelectedIdx: React.Dispatch<React.SetStateAction<keyof T>>;
}) {
  const [markerWidth, setMarkerWidth] = useState(0);
  const [markerOffset, setMarkerOffset] = useState(0);
  const markerRef = useRef<HTMLDivElement>(null);
  const initialSelectedRef = useRef<HTMLButtonElement>(null);

  function onSwitchTab(event: MouseEvent<HTMLButtonElement>, index: keyof T) {
    setSelectedIdx(index);
    setMarkerWidth(event.currentTarget.offsetWidth);
    setMarkerOffset(event.currentTarget.offsetLeft);
  }

  useEffect(() => {
    // Set initial marker width based on initial selected button
    if (initialSelectedRef.current != null) {
      setMarkerWidth(initialSelectedRef.current.offsetWidth);
      setMarkerOffset(initialSelectedRef.current.offsetLeft);
    }
  }, [initialSelectedRef]);

  return (
    <ul className="relative flex flex-wrap justify-center gap-1 sm:justify-start">
      <div
        className="absolute bottom-0 -z-10 h-full rounded-full bg-gradient-main text-white transition-all duration-300"
        ref={markerRef}
        style={{ width: markerWidth, left: `${markerOffset.toString()}px` }}
      ></div>
      {options.map((option, index) => (
        <TabSelector
          key={option}
          idx={index as keyof T}
          selectedIdx={selectedIdx}
          text={option}
          onClick={onSwitchTab}
          refObject={index === selectedIdx ? initialSelectedRef : undefined}
        />
      ))}
    </ul>
  );
}
