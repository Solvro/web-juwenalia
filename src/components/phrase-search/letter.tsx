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

const PATHS = ["/", "/artists", "/map", "/news"];

/** Gets the current page and location to display the letter on, based on the hash of the UUID. */
function getPhraseMetadata(phrase: SearchPhrase, currentIndex: number) {
  const hashBase = `${phrase.uuid}:${currentIndex.toString()}:`;
  const pathHash = hashString(`${hashBase}path`);
  const leftHash = hashString(`${hashBase}leftPercentage`);
  const topHash = hashString(`${hashBase}topPercentage`);
  // Ensure the index is within the bounds of the PATHS array
  const pathIndex = Number(pathHash % BigInt(PATHS.length));
  const page = PATHS[pathIndex];
  const leftPercentage = Number(leftHash % BigInt(1000)) / 1000;
  const topPercentage = Number(topHash % BigInt(1000)) / 1000;
  return { page, leftPercentage, topPercentage };
}

/** Simple hashing function using FNV-1a. Result is a positive BigInt. */
function hashString(value: string) {
  let hash = BigInt("2166136261"); // FNV-1a hash seed (prime number)
  for (let index = 0; index < value.length; index++) {
    hash ^= BigInt(value.codePointAt(index) ?? 0);
    hash *= BigInt("16777619"); // FNV-1a multiplier (prime number)
  }
  return hash > 0 ? hash : -hash;
}

export function LetterSearch({
  phrase,
  currentIndex,
}: {
  phrase: SearchPhrase;
  currentIndex: number;
}) {
  const [isClient, setIsClient] = useState(false);
  const [cookies, setCookie] = useCookies<
    "foundLetters",
    { foundLetters?: Record<SearchPhrase["uuid"], number[]> }
  >(["foundLetters"]);
  const pathname = usePathname();
  const windowDimensions = useWindowDimensions();

  useEffect(() => {
    setIsClient(true);
  }, [phrase, currentIndex]);

  const { page, leftPercentage, topPercentage } = getPhraseMetadata(
    phrase,
    currentIndex,
  );

  // Need to check if rendering on client to prevent hydration error
  if (pathname !== page || !isClient) {
    return null;
  }

  const currentFoundLetterIndexes = cookies.foundLetters?.[phrase.uuid] ?? [];
  const foundLetter = currentFoundLetterIndexes.includes(currentIndex);

  const wordObscured = Array.from({ length: phrase.word.length }, (_, index) =>
    [...currentFoundLetterIndexes, currentIndex].includes(index)
      ? phrase.word[index]
      : "_",
  ).join(" ");

  function handleClick() {
    // Don't need to copy the entire cookies, just for the current phrase search
    setCookie("foundLetters", {
      [phrase.uuid]: [...currentFoundLetterIndexes, currentIndex],
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
