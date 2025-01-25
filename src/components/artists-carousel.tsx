import { Carousel } from "@/components/generic-carousel-component";
import { fetchData } from "@/lib/api";
import type { ArtistProps } from "@/lib/types";

async function ArtistsCarousel() {
  const response = await fetchData<{ data: ArtistProps[] }>(
    "items/artists?fields=*,events.*,events.events_id.*,events.events_id.location.*,events.events_id.day.*",
  );

  const popularArtists = response.data.filter((artist) => artist.isPopular);

  return <Carousel artists={popularArtists} />;
}

export { ArtistsCarousel };
