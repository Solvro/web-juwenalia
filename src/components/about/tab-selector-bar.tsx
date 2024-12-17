import { Button } from "../ui/button";

function TabSelector<T>({
  text,
  idx,
  selectedIdx,
  setSelectedIdx,
}: {
  text: string;
  idx: T;
  selectedIdx: T;
  setSelectedIdx: React.Dispatch<React.SetStateAction<T>>;
}) {
  const selected = idx === selectedIdx;
  return (
    <li>
      <Button
        className={`rounded-full text-xs text-black ${selected ? "bg-gradient-main text-white" : "bg-transparent"}`}
        onClick={() => setSelectedIdx(idx)}
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
  return (
    <ul className="flex flex-wrap justify-center gap-1 sm:justify-start">
      {options.map((option, index) => (
        <TabSelector
          key={idx}
          idx={idx as keyof T}
          text={option}
          selectedIdx={selectedIdx}
          setSelectedIdx={setSelectedIdx}
        />
      ))}
    </ul>
  );
}
