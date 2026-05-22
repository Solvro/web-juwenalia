"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
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
  const sliderRef = useRef<Slider | null>(null);
  const [animateNav, setAnimateNav] = useState(false);
  const [navDirection, setNavDirection] = useState<"prev" | "next">("next");
  const navAnimationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  useEffect(() => {
    return () => {
      if (navAnimationTimeoutRef.current !== null) {
        clearTimeout(navAnimationTimeoutRef.current);
      }
    };
  }, []);

  function getDirection(currentSlide: number, nextSlide: number) {
    const total = artists.length;
    if (total <= 1) {
      return "next" as const;
    }

    const forwardDistance = (nextSlide - currentSlide + total) % total;
    const backwardDistance = (currentSlide - nextSlide + total) % total;

    return forwardDistance <= backwardDistance ? "next" : "prev";
  }

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
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: false,
    slidesToShow: 3,
    slidesToScroll: 1,
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
      const direction = getDirection(currentSlide, nextSlide);
      setNavDirection(direction);
      setAnimateNav(true);
      if (navAnimationTimeoutRef.current !== null) {
        clearTimeout(navAnimationTimeoutRef.current);
      }
      navAnimationTimeoutRef.current = setTimeout(() => {
        setAnimateNav(false);
      }, 320);
      setCurrentIndex(nextSlide);
    },
    customPaging: (index) => <button>{index + 1}</button>,
    appendDots: getAppendDots(3),

    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 1.5, slidesToScroll: 1.5 },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          appendDots: getAppendDots(3),
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
      <div className="pt-10 sm:flex sm:items-center sm:justify-between">
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
        <Slider ref={sliderRef} {...settings}>
          {artists.map((artist) => (
            <div key={artist.id} className="p-4">
              <Artist {...artist} />
            </div>
          ))}
        </Slider>
        <div className="mt-8 flex items-center justify-center">
          <ul className="flex items-center justify-center gap-3">
            <li
              className={cn(
                "h-4 rounded-full transition-all duration-300 ease-in-out",
                animateNav && navDirection === "prev"
                  ? "w-20 bg-black"
                  : "w-4 bg-zinc-300",
              )}
            >
              <button
                type="button"
                aria-label="Previous slide"
                className="h-full w-full rounded-full"
                onClick={() => sliderRef.current?.slickPrev()}
              />
            </li>
            <li
              className={cn(
                "h-4 rounded-full transition-all duration-300 ease-in-out",
                animateNav ? "w-4 bg-zinc-300" : "w-20 bg-black",
              )}
            />
            <li
              className={cn(
                "h-4 rounded-full transition-all duration-300 ease-in-out",
                animateNav && navDirection === "next"
                  ? "w-20 bg-black"
                  : "w-4 bg-zinc-300",
              )}
            >
              <button
                type="button"
                aria-label="Next slide"
                className="h-full w-full rounded-full"
                onClick={() => sliderRef.current?.slickNext()}
              />
            </li>
          </ul>
        </div>
      </PaddingWrapper>
    </>
  );
}
