"use client";

import type { ClassValue } from "clsx";
import type { MouseEvent, ReactNode } from "react";
import { useState } from "react";

import type { Faq } from "@/lib/types";
import { cn } from "@/lib/utils";

const FAQ_CARD_STYLES = [
  "col-span-6 bg-gradient-alt-1 sm:row-span-2",
  "col-span-6 bg-gradient-alt-2",
  "col-span-12 bg-gradient-alt-1 sm:col-span-8 sm:bg-gradient-alt-3",
  "col-span-6 bg-gradient-alt-3 sm:col-span-4 sm:bg-gradient-main",
  "col-span-6 bg-gradient-main sm:bg-gradient-alt-1 sm:col-span-3",
  "col-span-12 bg-gradient-alt-1 sm:col-span-9 sm:bg-gradient-alt-3",
  "col-span-12 bg-gradient-alt-2 sm:col-span-9",
  "col-span-6 bg-gradient-alt-3 sm:col-span-3 sm:bg-gradient-main",
];

function CardFace({
  className,
  children,
  onClick,
}: {
  children: ReactNode;
  className?: ClassValue;
  onClick: (event_: MouseEvent) => void;
}) {
  return (
    <div
      className={cn(
        "col-start-1 row-start-1 [backface-visibility:hidden]",
        className,
      )}
    >
      <button
        onClick={onClick}
        className="flex h-full w-full flex-col justify-between gap-2 px-4 py-5 text-start sm:px-4 sm:py-3 md:px-6 md:py-5 lg:px-10 lg:py-9"
      >
        {children}
      </button>
    </div>
  );
}

export function FrequentlyAskedQuestion({
  faq,
  index,
}: {
  faq: Faq;
  index: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const span = FAQ_CARD_STYLES[index % FAQ_CARD_STYLES.length];
  const questionId = index + 1;

  function toggleFlipped(event_: MouseEvent) {
    event_.preventDefault();
    setFlipped((old) => !old);
  }

  return (
    <div
      className={cn(
        "grid cursor-pointer rounded-2xl text-primary-foreground transition-transform duration-300 [transform-style:preserve-3d] sm:rounded-3xl",
        span,
        {
          "[transform:rotateY(180deg)]": flipped,
        },
      )}
    >
      {/* For some reason the front face is visible when the card is flipped (despite backface-visibility: hidden), but manually hiding it is a decent hack */}
      <CardFace
        className={cn(
          "transition-[visibility,opacity] [animation-duration:inherit]",
          {
            "invisible opacity-0": flipped,
          },
        )}
        onClick={toggleFlipped}
      >
        <h3 className="text-4xl font-extrabold sm:text-xl md:mb-2 md:text-4xl lg:mb-7 lg:text-8xl">
          #{questionId}
        </h3>
        <p className="font-bold sm:text-lg md:text-3xl/tight lg:text-4xl/snug lg:font-bold xl:text-5xl/snug">
          {faq.question}
        </p>
      </CardFace>
      <CardFace className="[transform:rotateY(180deg)]" onClick={toggleFlipped}>
        <p className="whitespace-pre-wrap sm:text-base md:text-xl lg:text-2xl xl:text-5xl/tight">
          {faq.answer}
        </p>
      </CardFace>
    </div>
  );
}
