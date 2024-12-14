"use client";

import { FacebookPost } from "@/lib/types";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import { useState } from "react";
import { Button } from "../ui/button";

export function PostPreview({ post }: { post: FacebookPost }) {
  const date = format(post.created_time, "dd MMMM yyyy", { locale: pl });
  const postTitle = post.title || post.message?.split("\n")[0];
  const [showDetails, setShowDetails] = useState(false);
  return (
    <>
      <div className="flex w-full flex-col items-start gap-2 px-7 py-3">
        <p className="text-xs text-primary">{date}</p>
        {postTitle ? (
          <h3 className="font-bold">{postTitle}</h3>
        ) : (
          <h3>
            <i>Brak tytułu</i>
          </h3>
        )}
        <div className={`flex flex-col items-start gap-3`}>
          {
            <div
              className={`grid transition-all ease-in-out ${
                showDetails
                  ? "grid-rows-animate-height-open visible opacity-100"
                  : "grid-rows-animate-height-closed invisible opacity-0"
              }`}
            >
              <p className="overflow-hidden whitespace-pre-line">
                {post.message}
              </p>
            </div>
          }
          <Button
            className="cursor-pointer list-none underline"
            variant="ghost"
            onClick={() => setShowDetails((old) => !old)}
          >
            {showDetails ? "Zwiń" : "Zobacz więcej"}
          </Button>
        </div>
      </div>
      <hr />
    </>
  );
}
