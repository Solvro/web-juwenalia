"use client";

import { format } from "date-fns";
import { pl } from "date-fns/locale";
import { useState } from "react";

import type { FacebookPost } from "@/lib/types";
import { cn } from "@/lib/utils";

import { Button } from "../button";

export function PostPreview({ post }: { post: FacebookPost }) {
  const date = format(post.updated_time, "dd MMMM yyyy", { locale: pl });
  let postTitle = post.title;
  let postMessage = post.message;
  if (postTitle == null) {
    const splittedMessage = post.message?.split("\n") ?? [];
    postTitle = splittedMessage.shift();
    postMessage = splittedMessage.join("\n");
  }
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="flex w-full flex-col items-start gap-2 px-3 py-3 sm:px-7 md:flex-row md:justify-between md:px-12 lg:px-24">
      <p className="bg-gradient-main bg-clip-text text-xs text-transparent md:text-sm lg:text-base">
        {date}
      </p>
      <div className="md:w-3/4 lg:w-2/3">
        <h3 className="text-lg md:text-xl lg:text-2xl">
          {postTitle === undefined ? (
            <i>Brak tytułu</i>
          ) : (
            <span className="font-semibold">{postTitle}</span>
          )}
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
            <p className="mt-6 overflow-hidden whitespace-pre-line">
              {postMessage}
            </p>
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
    </div>
  );
}
