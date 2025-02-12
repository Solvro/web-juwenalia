"use client";

import Link from "next/link";
import React, { useState } from "react";
import type { Settings } from "react-slick";
import Slider from "react-slick";

import { Artist } from "@/components/artists/artist";
import { Button } from "@/components/button";
import { HomepageHeader } from "@/components/homepage-header";
import { PaddingWrapper } from "@/components/padding-wrapper";
import type { ArtistProps } from "@/lib/types";

import "../../app/slick-theme.css";
import "../../app/slick.css";

function Carousel({ artists }: { artists: ArtistProps[] }) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    afterChange: (current) => {
      setCurrentIndex(current);
    },
    customPaging: (index) => <button>{index + 1}</button>,
    appendDots: (dots) => {
      const dotArray = dots as React.ReactNode[];
      const total = dotArray.length;
      if (total <= 3) {
        return <ul>{dots}</ul>;
      }
      let start = currentIndex - 1;
      let tip = currentIndex + 2;

      if (start < 0) {
        start = 0;
        tip = 3;
      }
      if (tip > total) {
        tip = total;
        start = total - 3;
      }

      const limitedDots = dotArray.slice(start, tip);

      return <ul>{limitedDots}</ul>;
    },

    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 1.5, slidesToScroll: 1.5 },
      },
      { breakpoint: 500, settings: { slidesToShow: 1.4, slidesToScroll: 1.4 } },
      { breakpoint: 400, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <>
      <div className="sm:flex sm:items-center sm:justify-between">
        <HomepageHeader>Tegoroczni artyści</HomepageHeader>
        <div className="hidden sm:block">
          {" "}
          {/*this is just for now*/}
          <Button
            as={Link}
            href="/artists"
            variant="secondary"
            className="ml-4 mr-20 mt-4 w-full max-w-[225px]"
          >
            zobacz więcej
          </Button>
        </div>
      </div>
      <PaddingWrapper>
        <Slider {...settings} className="lg:mt-32">
          {artists.map((artist) => (
            <div key={artist.id} className="p-4">
              <Artist {...artist} />
            </div>
          ))}
        </Slider>
      </PaddingWrapper>
    </>
  );
}

export { Carousel };
