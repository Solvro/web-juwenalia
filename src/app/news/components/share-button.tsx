"use client";

import { ClipboardCheckIcon, Share2Icon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/button";

export function ShareButton({ link }: { link: string }) {
  const [clicked, setClicked] = useState(false);

  async function handleClick() {
    setClicked(true);
    await navigator.clipboard.writeText(link);
    setTimeout(() => {
      setClicked(false);
    }, 3000);
  }
  return (
    <Button
      className="hover:text-primary"
      onClick={handleClick}
      disabled={clicked}
      title="Copy post URL to clipboard"
    >
      {clicked ? (
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
