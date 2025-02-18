"use client";

import type { ClassValue } from "clsx";
import type { MouseEvent, ReactNode } from "react";
import { useState } from "react";

import type { Faq } from "@/lib/types";
import { cn } from "@/lib/utils";

const FAQ_CARD_STYLES = [
  "col-span-6 bg-gradient-alt-1",
  "col-span-6 bg-gradient-alt-2",
  "col-span-12 bg-gradient-alt-1 sm:bg-gradient-alt-3",
  "col-span-6 bg-gradient-alt-3 sm:bg-gradient-main",
  "col-span-6 bg-gradient-main sm:bg-gradient-alt-1",
  "col-span-12 bg-gradient-alt-1 sm:bg-gradient-alt-3",
  "col-span-12 bg-gradient-alt-2",
  "col-span-6 bg-gradient-alt-3 sm:bg-gradient-main",
];

function getColSpan(faq: Faq, sibling: Faq | null): ClassValue {
  if (sibling == null) {
    return null;
  }
  const textProportion =
    faq.answer.length / (faq.answer.length + sibling.answer.length);
  const columns = Math.round(textProportion * 12);
  if (columns < 1 || columns > 11) {
    console.warn("Unexpected column count", columns);
    return null;
  }
  const constrained = Math.max(Math.min(columns, 8), 4);
  const span = `sm:col-span-${constrained.toString()}`;
  return span;
}

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
        "col-start-1 row-start-1 px-1 py-5 [backface-visibility:hidden] sm:py-3 md:py-5 lg:py-9",
        className,
      )}
    >
      <div className="h-full max-h-90 w-full overflow-y-scroll px-3 sm:px-4 md:px-5 lg:px-10">
        <button
          onClick={onClick}
          className="flex h-full w-full flex-col justify-between gap-2 text-start"
        >
          {children}
        </button>
      </div>
    </div>
  );
}

export function FrequentlyAskedQuestion({
  faqs,
  index,
}: {
  faqs: Faq[];
  index: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const style = FAQ_CARD_STYLES[index % FAQ_CARD_STYLES.length];
  const questionId = index + 1;

  const faq = faqs[index];
  // Gets the other FAQ item in the same column for questions >= #3
  const sibling = index < 2 ? null : faqs[index - (index % 2) * 2 + 1];

  function toggleFlipped(event_: MouseEvent) {
    event_.preventDefault();
    setFlipped((old) => !old);
  }

  return (
    <div
      className={cn(
        "grid cursor-pointer rounded-2xl text-primary-foreground transition-transform duration-300 [transform-style:preserve-3d] sm:rounded-3xl",
        style,
        getColSpan(faq, sibling),
        {
          "[transform:rotateY(180deg)]": flipped,
          "sm:row-span-2": index === 0,
          "col-span-12": index === faqs.length - 1,
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
        <h3 className="text-4xl font-extrabold sm:text-xl md:mb-2 md:text-4xl lg:mb-7 lg:text-6xl">
          #{questionId}
        </h3>
        <p className="font-bold sm:text-lg md:text-xl/tight lg:text-2xl/snug lg:font-bold">
          {faq.question}
        </p>
      </CardFace>
      <CardFace className="[transform:rotateY(180deg)]" onClick={toggleFlipped}>
        <p className="whitespace-pre-wrap sm:text-base md:text-xl">
          {faq.answer}
        </p>
      </CardFace>
    </div>
  );
}
