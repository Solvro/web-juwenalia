import dynamic from "next/dynamic";
import type { Settings } from "react-slick";

import { Artist } from "@/components/artist";
import { getArtists } from "@/lib/artists";

import "../app/slick-theme.css";
import "../app/slick.css";

const Slider = dynamic(async () => import("react-slick"), { ssr: true });

async function Carousel() {
  const artists = await getArtists();

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
