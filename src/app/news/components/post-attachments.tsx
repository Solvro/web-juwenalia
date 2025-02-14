"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/button";
import type { FacebookAttachment } from "@/lib/types";

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
          className="order-2 ml-3"
          onClick={() => {
            setShowSubAttachments((old) => !old);
          }}
        >
          {showSubAttachments ? "Mniej" : "Więcej"} zdjęć
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
