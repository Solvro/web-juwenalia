"use client";

import type { ClassValue } from "clsx";
import type { ReactNode } from "react";
import { useState } from "react";

import type { Faq } from "@/lib/types";
import { cn } from "@/lib/utils";

const FAQ_CARD_SPANS = [
  "col-span-6",
  "col-span-5",
  "col-span-7",
  "col-span-8",
  "col-span-4",
  "col-span-5",
  "col-span-7",
  "col-span-6",
];

function CardFace({
  questionId,
  className,
  children,
}: {
  questionId: number;
  children: ReactNode;
  className?: ClassValue;
}) {
  return (
    <div
      className={cn(
        "inset-0 h-full px-3 py-2 transition-all [backface-visibility:hidden] [transition-duration:inherit] sm:px-4 sm:py-3 md:px-6 md:py-5 lg:px-10 lg:py-9",
        className,
      )}
    >
      <h3 className="font-extrabold sm:text-xl md:mb-2 md:text-4xl lg:mb-7 lg:text-8xl">
        {questionId.toString().padStart(2, "0")}
      </h3>
      {children}
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
  const span = FAQ_CARD_SPANS[index % FAQ_CARD_SPANS.length];
  const questionId = index + 1;
  return (
    <button
      className={cn(
        "relative rounded-2xl bg-gradient-main text-start text-primary-foreground transition-transform duration-300 [transform-style:preserve-3d] sm:rounded-3xl md:rounded-[2rem] lg:rounded-[4rem]",
        span,
        {
          "[transform:rotateY(180deg)]": flipped,
        },
      )}
      onClick={() => {
        setFlipped((old) => !old);
      }}
    >
      {/* For some reason the front face is visible when the card is flipped (despite backface-visibility: hidden), but manually hiding it is a decent hack */}
      <CardFace
        questionId={questionId}
        className={cn("absolute", { "invisible opacity-0": flipped })}
      >
        <p className="text-sm font-semibold sm:text-lg md:text-3xl/tight lg:text-4xl/snug lg:font-bold xl:text-5xl/snug">
          {faq.question}
        </p>
      </CardFace>
      <CardFace questionId={questionId} className="[transform:rotateY(180deg)]">
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-5xl/tight">
          {faq.answer}
        </p>
      </CardFace>
    </button>
  );
}
