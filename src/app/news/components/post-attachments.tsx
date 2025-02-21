"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/button";
import type { FacebookAttachment } from "@/lib/types";
import { cn } from "@/lib/utils";

function PostAttachment({ attachment }: { attachment: FacebookAttachment }) {
  const [showSubAttachments, setShowSubAttachments] = useState(false);
  const hasSubAttachments = attachment.subattachments?.data != null;

  return (
    <>
      {hasSubAttachments && showSubAttachments ? (
        <PostAttachments attachments={attachment.subattachments?.data ?? []} />
      ) : (
        <Image
          src={attachment.media.image.src}
          alt="Facebook post image attachment"
          className="my-4 basis-full"
          width={800}
          height={0}
        />
      )}
      {hasSubAttachments ? (
        <Button
          className="order-2 mt-2 sm:ml-3 sm:mt-0"
          onClick={() => {
            setShowSubAttachments((old) => !old);
          }}
        >
          <div className="flex items-center gap-4">
            <ChevronDown
              className={cn("transition-transform duration-300", {
                "rotate-180": showSubAttachments,
              })}
            />
            {showSubAttachments ? "Mniej" : "Więcej"} zdjęć
          </div>
        </Button>
      ) : null}
    </>
  );
}

export function PostAttachments({
  attachments,
}: {
  attachments: FacebookAttachment[];
}) {
  return attachments.map((attachment) => (
    <PostAttachment attachment={attachment} key={attachment.media.image.src} />
  ));
}
