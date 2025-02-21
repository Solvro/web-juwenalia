"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { useRef, useState } from "react";
import type { Settings } from "react-slick";
import Slider from "react-slick";

import "@/app/slick-theme.css";
import "@/app/slick.css";
import { Artist } from "@/components/artists/artist";
import { Button } from "@/components/button";
import { HomepageHeader } from "@/components/homepage-header";
import { PaddingWrapper } from "@/components/padding-wrapper";
import type { ArtistProps } from "@/lib/types";
import { cn } from "@/lib/utils";

function CarouselArrow({
  left = false,
  right = false,
  currentIndex,
  totalArtists = 0,
  onClick,
}: {
  onClick?: () => void;
  currentIndex: number;
} & (
  | { left: true; right?: false; totalArtists?: number }
  | { left?: false; right: true; totalArtists: number }
)) {
  return (
    <button
      className={cn(
        "absolute -bottom-[50px] z-10 scale-125 transition-opacity duration-300",
        {
          "opacity-50": left
            ? Math.floor(currentIndex) === 0
            : Math.ceil(currentIndex) === totalArtists - 1,
          "right-1 sm:right-1/4 md:right-1/3": right,
          "left-1 sm:left-1/4 md:left-1/3": left,
        },
      )}
      onClick={onClick}
    >
      {left ? <ArrowLeft /> : <ArrowRight />}
    </button>
  );
}

export function Carousel({ artists }: { artists: ArtistProps[] }) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const sliderRef = useRef<Slider>(null);

  const getAppendDots = (dotsToShow: number) =>
    function appendDots(dots: ReactNode[]) {
      const dotArray = dots;
      const total = dotArray.length;
      if (total <= dotsToShow) {
        return <ul>{dots}</ul>;
      }
      let start = Math.floor(currentIndex) - 1;
      let tip = start + dotsToShow;

      if (start < 0) {
        start = 0;
        tip = dotsToShow;
      }
      if (tip > total) {
        tip = total;
        start = total - dotsToShow;
      }

      const limitedDots = dotArray.slice(start, tip);

      return <ul>{limitedDots}</ul>;
    };

  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    prevArrow: <CarouselArrow left currentIndex={currentIndex} />,
    nextArrow: (
      <CarouselArrow
        right
        currentIndex={currentIndex}
        totalArtists={artists.length}
      />
    ),
    beforeChange: (currentSlide, nextSlide) => {
      console.warn({ currentSlide, nextSlide });
      setCurrentIndex(nextSlide);
    },
    customPaging: (index) => <button>{index + 1}</button>,
    appendDots: getAppendDots(5),

    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 1.5, slidesToScroll: 1.5 },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1.4,
          appendDots: getAppendDots(4),
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          appendDots: getAppendDots(3),
        },
      },
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
            className="ml-4 mr-20 w-full max-w-[225px]"
          >
            zobacz więcej
          </Button>
        </div>
      </div>
      <PaddingWrapper>
        <Slider {...settings} ref={sliderRef}>
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
