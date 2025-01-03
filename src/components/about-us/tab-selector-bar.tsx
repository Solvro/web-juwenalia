import { useEffect, useRef, useState } from "react";
import type { CSSProperties, MouseEvent, RefObject } from "react";

import { Underlined } from "../underlined";

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
      <button
        className={`group bg-transparent px-2 py-1 text-xs min-[400px]:px-3 min-[400px]:py-2 md:px-4 md:py-2 ${isSelected ? "rounded-full text-white" : "text-black"} transition-colors duration-300 md:text-base lg:px-5 lg:py-3 lg:text-lg`}
        onClick={(event) => {
          onClick(event, idx);
        }}
        ref={refObject}
      >
        <Underlined bgClass={isSelected ? "bg-transparent" : undefined}>
          {text}
        </Underlined>
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
