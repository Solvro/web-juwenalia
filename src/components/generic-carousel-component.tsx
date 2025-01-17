"use client";

import type { Settings } from "react-slick";

import { Artist } from "@/components/artist";
import type { ArtistProps } from "@/lib/types";

import "../app/slick-theme.css";
import "../app/slick.css";

function Carousel({ artists }: { artists: ArtistProps[] }) {
  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1.7,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container mx-auto my-20 flex h-fit w-4/5 flex-col justify-center">
      <Slider {...settings}>
        <div className="h-96 border-4 border-solid border-red-900">
          <h3>1</h3>
        </div>
        <div className="h-96 border-4 border-solid border-red-900">
          <h3>2</h3>
        </div>
        <div className="h-96 border-4 border-solid border-red-900">
          <h3>3</h3>
        </div>
        <div className="h-96 border-4 border-solid border-red-900">
          <h3>4</h3>
        </div>
      </Slider>
    </div>
  );
}

export { Carousel };
