"use client";

import Link from "next/link";
import type { Settings } from "react-slick";
import Slider from "react-slick";

import { Artist } from "@/components/artist";
import { Button } from "@/components/button";
import { HomepageHeader } from "@/components/homepage-header";
import { NoDataInfo } from "@/components/no-data-info";
import { PaddingWrapper } from "@/components/padding-wrapper";
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
        <Button
          as={Link}
          href="/artists"
          variant="secondary"
          className="ml-4 mr-20 mt-4 w-full max-w-[225px]"
        >
          zobacz więcej
        </Button>
      </div>
      <PaddingWrapper>
        {artists.length > 0 ? (
          <Slider {...settings} className="lg:mt-32">
            {artists.map((artist) => (
              <div key={artist.id} className="p-4">
                <Artist {...artist} />
              </div>
            ))}
          </Slider>
        ) : (
          <NoDataInfo
            errorTitle="Brak artystów"
            errorMessage="Nie udało nam się znaleźć żadnych artystów. Wróć tutaj później!"
          />
        )}
      </PaddingWrapper>
    </>
  );
}

export { Carousel };
