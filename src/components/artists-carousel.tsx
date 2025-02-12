import { Carousel } from "@/components/artist-carousel-template";
import { fetchData } from "@/lib/api";
import type { ArtistProps } from "@/lib/types";

async function ArtistsCarousel() {
  try {
    const response = await fetchData<{ data: ArtistProps[] }>(
      "items/artists?fields=*,events.*,events.events_id.*,events.events_id.location.*,events.events_id.day.*",
    );
    const popularArtists = response.data.filter((artist) => artist.isPopular);
    if (popularArtists.length === 0) {
      return null;
    }
    return <Carousel artists={popularArtists} />;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export { ArtistsCarousel };
