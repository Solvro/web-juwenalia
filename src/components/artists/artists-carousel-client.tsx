"use client";

import Image from "next/image";

import { Carousel } from "@/components/artists/artist-carousel-template";
import type { ArtistProps } from "@/lib/types";

function ArtistsCarouselClient({ artists }: { artists: ArtistProps[] }) {
  return (
    <section className="relative pb-16">
      <div className="pointer-events-none absolute -right-8 top-0 z-0 md:-right-6">
        <Image
          src="/bushes/bush-1.svg"
          alt=""
          width={238}
          height={129}
          className="w-[95px] sm:w-[140px] md:w-[170px]"
        />
      </div>

      <div className="pointer-events-none absolute -bottom-10 -left-10 z-0 md:-left-8">
        <Image
          src="/bushes/bush-1.svg"
          alt=""
          width={238}
          height={129}
          className="w-[95px] rotate-180 sm:w-[140px] md:w-[170px]"
        />
      </div>

      <div className="relative z-10">
        <Carousel artists={artists} />
      </div>
    </section>
  );
}

export { ArtistsCarouselClient };
