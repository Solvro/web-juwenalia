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
      await navigator.clipboard.writeText(link);
    } else {
      setCopyingFailed(true);
    }
    setTimeout(() => {
      setClicked(false);
    }, 3000);
  }
  return (
    <Button
      variant={copyingFailed ? "destructive" : "default"}
      onClick={handleClick}
      disabled={clicked}
      title="Skopiuj link do schowka"
    >
      <div className="flex items-center gap-4">
        {copyingFailed ? (
          <>Nie udało się skopiować</>
        ) : clicked ? (
          <>
            <ClipboardCheckIcon /> Skopiowano!
          </>
        ) : (
          <>
            <Share2Icon /> Udostępnij
          </>
        )}
      </div>
    </Button>
  );
}
