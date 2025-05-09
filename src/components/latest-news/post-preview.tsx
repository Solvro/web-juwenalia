"use client";

import { format } from "date-fns";
import { pl } from "date-fns/locale";
import { useEffect, useRef, useState } from "react";

import { PaddingWrapper } from "@/components/padding-wrapper";
import type { NewsPost } from "@/lib/types";
import { cn } from "@/lib/utils";

import { Button } from "../button";

export function PostPreview({ post }: { post: NewsPost }) {
  const date = format(post.date_updated ?? post.date_created, "dd MMMM yyyy", {
    locale: pl,
  });
  const [showDetails, setShowDetails] = useState(false);
  const contentRef = useRef<HTMLParagraphElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (contentRef.current && isMounted) {
      contentRef.current.innerHTML = post.content;
    }
  }, [post.content, isMounted]);

  return (
    <PaddingWrapper className="flex w-full flex-col items-start gap-2 py-3 md:flex-row md:justify-between">
      <p className="bg-gradient-main bg-clip-text text-xs text-transparent md:text-sm lg:text-base">
        {date}
      </p>
      <div className="md:w-3/4 lg:w-2/3">
        <h3 className="text-lg md:text-xl lg:text-2xl">
          {<span className="font-semibold">{post.title}</span>}
        </h3>
        <div className="flex flex-col items-start gap-3">
          <div
            className={cn(
              "invisible grid grid-rows-animate-height-closed opacity-0 transition-all ease-in-out",
              {
                "visible grid-rows-animate-height-open opacity-100":
                  showDetails,
              },
            )}
          >
            <p
              ref={contentRef}
              className="mt-6 overflow-hidden whitespace-pre-line"
            />
          </div>
          <Button
            className="cursor-pointer list-none font-light hover:bg-transparent"
            variant="link"
            onClick={() => {
              setShowDetails((old) => !old);
            }}
          >
            {showDetails ? "Zwiń" : "Zobacz więcej"}
          </Button>
        </div>
      </div>
    </PaddingWrapper>
  );
}
