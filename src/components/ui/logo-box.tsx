import Image from "next/image";

import { cn } from "@/lib/utils";

export function LogoBox({
  src,
  alt,
  maxWidth = 160,
  maxHeight = 80,
  className,
}: {
  src: string;
  alt: string;
  maxWidth?: number;
  maxHeight?: number;
  className?: string;
}) {
  return (
    <div className={cn("flex w-full items-center justify-center", className)}>
      <div
        className="relative max-w-full"
        style={{
          width: `${maxWidth}px`,
          height: `${maxHeight}px`,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: "contain" }}
          sizes={`${maxWidth}px`}
        />
      </div>
    </div>
  );
}
