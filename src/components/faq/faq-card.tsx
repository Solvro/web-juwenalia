"use client";

import type { ClassValue } from "clsx";
import type { MouseEvent, ReactNode } from "react";
import { useEffect, useState } from "react";

import type { Faq } from "@/lib/types";
import { cn } from "@/lib/utils";

const FAQ_CARD_STYLES = [
  "col-span-6 bg-gradient-alt-1 before:bg-gradient-alt-1",
  "col-span-6 bg-gradient-alt-2 before:bg-gradient-alt-2",
  "col-span-12 bg-gradient-alt-1 sm:bg-gradient-alt-3 before:bg-gradient-alt-1 sm:before:bg-gradient-alt-3",
  "col-span-6 bg-gradient-alt-3 sm:bg-gradient-main before:bg-gradient-alt-3 sm:before:bg-gradient-main",
  "col-span-6 bg-gradient-main sm:bg-gradient-alt-1 before:bg-gradient-main sm:before:bg-gradient-alt-1",
  "col-span-12 bg-gradient-alt-1 sm:bg-gradient-alt-3 before:bg-gradient-alt-1 sm:before:bg-gradient-alt-3",
  "col-span-12 bg-gradient-alt-2 before:bg-gradient-alt-2",
  "col-span-6 bg-gradient-alt-3 sm:bg-gradient-main before:bg-gradient-alt-3 sm:before:bg-gradient-main",
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
  const map: Record<number, string> = {
    4: "sm:col-span-4",
    5: "sm:col-span-5",
    6: "sm:col-span-6",
    7: "sm:col-span-7",
    8: "sm:col-span-8",
  };
  return map[constrained];
}

function CardFace({
  className,
  children,
  visible,
}: {
  children: ReactNode;
  className?: ClassValue;
  visible: boolean;
}) {
  const [showScrollbar, setShowScrollbar] = useState(false);
  useEffect(() => {
    if (visible) {
      setShowScrollbar(true);
      return;
    }
    const timeout = setTimeout(() => {
      setShowScrollbar(false);
    }, 300);
    return () => {
      clearTimeout(timeout);
    };
  }, [visible]);
  return (
    <div
      className={cn(
        "col-start-1 row-start-1 h-full w-full overflow-hidden px-1 py-5 text-start [backface-visibility:hidden] sm:py-3 md:py-5 lg:py-9",
        className,
      )}
    >
      <div
        className={cn(
          "flex h-full max-h-90 w-full flex-col justify-between gap-2 px-3 sm:px-4 md:px-5 lg:px-10",
          {
            "overflow-y-auto": showScrollbar,
          },
        )}
      >
        {children}
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
    <button
      onClick={toggleFlipped}
      className={cn(
        "relative grid cursor-pointer rounded-2xl text-start text-primary-foreground transition-transform duration-300 [transform-style:preserve-3d] focus-visible:outline-2 focus-visible:outline-white sm:rounded-3xl",
        "before:absolute before:-inset-1.5 before:-z-10 before:rounded-[1.25rem] before:opacity-0 focus-visible:before:opacity-100 sm:before:rounded-[1.75rem]",
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
        visible={!flipped}
      >
        <h3 className="text-4xl font-extrabold sm:text-xl md:mb-2 md:text-4xl lg:mb-7 lg:text-6xl">
          #{questionId}
        </h3>
        <p className="font-bold sm:text-lg md:text-xl/tight lg:text-2xl/snug lg:font-bold">
          {faq.question}
        </p>
      </CardFace>
      <CardFace className="[transform:rotateY(180deg)]" visible={flipped}>
        <p className="whitespace-pre-wrap sm:text-base md:text-xl">
          {faq.answer}
        </p>
      </CardFace>
    </button>
  );
}
