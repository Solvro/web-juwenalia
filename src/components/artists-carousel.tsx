import { Carousel } from "@/components/generic-carousel-component";
import { fetchData } from "@/lib/api";
import type { ArtistProps } from "@/lib/types";

async function ArtistsCarousel() {
  const response = await fetchData<{ data: ArtistProps[] }>(
    "items/artists?fields=*,events.*,events.events_id.*,events.events_id.location.*,events.events_id.day.*",
  );

  const artists_raw = response.data;

  // divide artists into popular and non-popular
  const popularArtists = artists_raw.filter((artist) => artist.isPopular);

  const artists = [...popularArtists];

  return <Carousel artists={artists} />;
}

export { ArtistsCarousel };
