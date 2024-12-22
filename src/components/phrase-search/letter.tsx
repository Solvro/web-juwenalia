"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import { useWindowDimensions } from "@/hooks/window-dimensions";
import { conjugateNumeric } from "@/lib/polish";
import type { SearchPhrase } from "@/lib/types";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export function LetterSearch({
  phrase,
  currentIndex,
}: {
  phrase: SearchPhrase;
  currentIndex: number;
}) {
  const [leftPercentage, setLeftPercentage] = useState(-1);
  const [topPercentage, setTopPercentage] = useState(-1);
  const [cookies, setCookie] = useCookies<
    "foundLetters",
    { foundLetters?: Record<number, number[]> }
  >(["foundLetters"]);
  const windowDimensions = useWindowDimensions();
  const pathname = usePathname();

  useEffect(() => {
    setLeftPercentage(Math.random());
    setTopPercentage(Math.random());
  }, []);

  if (pathname !== phrase.page) {
    return null;
  }

  // Needed to prevent hydration error
  if (leftPercentage === -1 || topPercentage === -1) {
    return null;
  }

  const currentFoundLetterIndexes = cookies.foundLetters?.[phrase.id] ?? [];

  const foundLetter = currentFoundLetterIndexes.includes(currentIndex);

  const wordObscured = Array.from({ length: phrase.word.length }, (_, index) =>
    [...currentFoundLetterIndexes, currentIndex].includes(index)
      ? phrase.word[index]
      : "_",
  ).join(" ");

  function handleClick() {
    // Don't need to copy the entire cookies, just for the current phrase search
    setCookie("foundLetters", {
      [phrase.id]: [...currentFoundLetterIndexes, currentIndex],
    });
  }

  return (
    <Dialog>
      {!foundLetter && (
        <DialogTrigger asChild>
          <button
            onClick={handleClick}
            className="absolute bg-gradient-main bg-clip-text text-xl font-medium text-transparent"
            style={{
              left: `${(leftPercentage * windowDimensions.width).toString()}px`,
              top: `${(topPercentage * windowDimensions.height).toString()}px`,
            }}
          >
            {phrase.word[currentIndex]}
          </button>
        </DialogTrigger>
      )}
      <DialogContent>
        <DialogTitle>Gratulacje!</DialogTitle>
        <DialogDescription>
          Znaleziono część hasła:{" "}
          <code className="rounded-sm bg-neutral-500 px-2 py-1 text-neutral-200">
            {wordObscured}
          </code>{" "}
          ({conjugateNumeric(phrase.word.length, "liter", "a", "y", "")})
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
