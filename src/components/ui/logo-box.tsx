import Image from "next/image";

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
    <div
      className={`flex items-center justify-center ${className ?? ""}`}
      style={{ width: "100%" }}
    >
      <div
        style={{
          position: "relative",
          width: `${maxWidth}px`,
          height: `${maxHeight}px`,
          maxWidth: "100%",
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
