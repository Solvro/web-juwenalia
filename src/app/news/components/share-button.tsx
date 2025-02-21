"use client";

import { Share2Icon } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/button";
import type { FacebookPost } from "@/lib/types";

export function ShareButton({ post }: { post: FacebookPost }) {
  async function share() {
    try {
      if ("clipboard" in navigator && "writeText" in navigator.clipboard) {
        await navigator.clipboard.writeText(post.permalink_url);
      } else {
        throw new Error("Clipboard API not available");
      }
    } catch (error) {
      toast.error("Nie udało się skopiować linku do schowka", {
        description: post.permalink_url,
      });
      console.error("Could not copy to clipboard", error);
      return;
    }
    if (
      "canShare" in navigator &&
      "share" in navigator &&
      typeof navigator.share === "function"
    ) {
      const shareObject = {
        title: post.title,
        text: "Zobacz post o #Juwenaliach2025 na Facebooku",
        url: post.permalink_url,
      };
      try {
        await navigator.share(shareObject);
        return;
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          // User closed the share dialog
          return;
        }
        console.warn("Could not share via navigator api", error);
      }
    }
    toast.info("Link skopiowany do schowka!");
  }
  return (
    <Button onClick={share} title="Skopiuj link do schowka">
      <div className="flex items-center gap-4">
        <Share2Icon /> Udostępnij
      </div>
    </Button>
  );
}
