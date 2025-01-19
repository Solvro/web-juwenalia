"use client";

import type { Settings } from "react-slick";
import Slider from "react-slick";

import { Artist } from "@/components/artist";
import type { CarouselProps } from "@/lib/types";

import "../app/slick-theme.css";
import "../app/slick.css";

function Carousel({ artists }: CarouselProps) {
  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      { breakpoint: 800, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1.5, slidesToScroll: 1.5 } },
      { breakpoint: 500, settings: { slidesToShow: 1.4, slidesToScroll: 1.4 } },
      { breakpoint: 400, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="slider-container mx-auto my-20 flex h-fit w-11/12 flex-col justify-center">
      <Slider {...settings}>
        {artists.map((artist) => (
          <div key={artist.id} className="p-4">
            <Artist {...artist} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export { Carousel };
