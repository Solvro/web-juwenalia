"use client";

import { ClipboardCheckIcon, Share2Icon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/button";

export function ShareButton({ link }: { link: string }) {
  const [clicked, setClicked] = useState(false);
  const [copyingFailed, setCopyingFailed] = useState(false);

  async function handleClick() {
    setClicked(true);
    if ("clipboard" in navigator && "writeText" in navigator.clipboard) {
      setCopyingFailed(true);
    } else {
      await navigator.clipboard.writeText(link);
    }
    setTimeout(() => {
      setClicked(false);
    }, 3000);
  }
  return (
    <Button
      className="align-bottom"
      variant={copyingFailed ? "destructive" : "default"}
      onClick={handleClick}
      disabled={clicked}
      title="Copy post URL to clipboard"
    >
      {copyingFailed ? (
        <>Nie udało się skopiować</>
      ) : clicked ? (
        <>
          <ClipboardCheckIcon /> Skopiowano!
        </>
      ) : (
        <>
          <Share2Icon />
          Udostępnij
        </>
      )}
    </Button>
  );
}
