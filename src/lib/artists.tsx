// lib/artists.ts
import { fetchData } from "@/lib/api";
import type { ArtistProps } from "@/lib/types";

// Function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

// Function to fetch and prepare artists data
export async function getArtists(): Promise<ArtistProps[]> {
  const response = await fetchData<{ data: ArtistProps[] }>(
    "items/artists?fields=*,events.*,events.events_id.*,events.events_id.location.*,events.events_id.day.*",
  );

  const artists_raw = response.data;

  const popularArtists = artists_raw.filter((artist) => artist.isPopular);
  const nonPopularArtists = artists_raw.filter((artist) => !artist.isPopular);

  const shuffledNonPopularArtists = shuffleArray(nonPopularArtists);
  const shuffledPopularArtists = shuffleArray(popularArtists);

  return [...shuffledPopularArtists, ...shuffledNonPopularArtists];
}
