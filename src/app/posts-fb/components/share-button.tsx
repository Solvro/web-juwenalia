"use client";

import { ClipboardCheckIcon, Share2Icon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/button";

export function ShareButton({ link }: { link: string }) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
    void navigator.clipboard.writeText(link);
    setTimeout(() => {
      setClicked(false);
    }, 3000);
  }
  return (
    <Button
      className="min-w-36"
      onClick={handleClick}
      disabled={clicked}
      title="Copy post URL to clipboard"
    >
      {clicked ? (
        <>
          <ClipboardCheckIcon /> URL copied!
        </>
      ) : (
        <>
          <Share2Icon />
          Share
        </>
      )}
    </Button>
  );
}
