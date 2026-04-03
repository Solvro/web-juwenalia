"use client";

import Image from "next/image";

import { Carousel } from "@/components/artists/artist-carousel-template";
import type { ArtistProps } from "@/lib/types";

import { LeafComponent } from "../leaf-component";

function ArtistsCarouselClient({ artists }: { artists: ArtistProps[] }) {
  return (
    <section className="relative pb-16">
      <LeafComponent className="absolute -right-8 top-0 z-20 md:-right-6">
        <Image
          src="/bushes/bush-1.svg"
          alt=""
          width={238}
          height={129}
          className="w-[95px] sm:w-[140px] md:w-[170px]"
        />
      </LeafComponent>

      <LeafComponent className="absolute -bottom-20 -left-10 z-20 md:-left-8">
        <Image
          src="/bushes/bush-1.svg"
          alt=""
          width={238}
          height={129}
          className="w-[95px] rotate-180 sm:w-[140px] md:w-[170px]"
        />
      </LeafComponent>

      <div className="relative z-10">
        <Carousel artists={artists} />
      </div>
    </section>
  );
}

export { ArtistsCarouselClient };
