"use client";

import { Button } from "@/components/ui/button";
import { FacebookAttachment } from "@/lib/types";
import Image from "next/image";
import { useState } from "react";

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
          alt={"Facebook post image attachment"}
          className="my-4"
          width={800}
          height={0}
          // width={attachment.media.image.width}
          // height={attachment.media.image.height}
        />
      )}
      {hasSubAttachments && (
        <Button
          className="order-2 ml-3 hover:text-primary"
          onClick={() => setShowSubAttachments((old) => !old)}
        >
          {showSubAttachments ? "Mniej" : "Więcej"} zdjęć
        </Button>
      )}
    </>
  );
}

export function PostAttachments({
  attachments,
}: {
  attachments: FacebookAttachment[];
}) {
  return attachments.map((attachment, idx) => (
    <PostAttachment attachment={attachment} key={`post-attachment-${idx}`} />
  ));
}
