import { useEffect, useRef, useState } from "react";
import type { CSSProperties, MouseEvent, RefObject } from "react";

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

export function TabSelectorBar<T extends readonly string[]>({
  options,
  selectedIdx,
  setSelectedIdx,
}: {
  options: T;
  selectedIdx: keyof T;
  setSelectedIdx: React.Dispatch<React.SetStateAction<keyof T>>;
}) {
  const [markerStyle, setMarkerStyle] = useState<CSSProperties>({});
  const markerRef = useRef<HTMLDivElement>(null);
  const initialSelectedRef = useRef<HTMLButtonElement>(null);

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

  function onSwitchTab(event: MouseEvent<HTMLButtonElement>, index: keyof T) {
    setSelectedIdx(index);
    updateMarkerStyle(event.currentTarget);
  }

  return (
    <ul className="relative flex flex-wrap justify-center gap-1 sm:justify-start">
      <div
        className="absolute bottom-0 -z-10 h-full rounded-full bg-gradient-main text-white transition-all duration-300"
        ref={markerRef}
        style={markerStyle}
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
