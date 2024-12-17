import { Artist } from "@/components/artist";
import { fetchData } from "@/lib/api";
import type { ArtistProps } from "@/lib/types";

// if we need shuffling the artists, so everyone in their respective P/NP category
// gets somewhat even representation on our site
function shuffleArray<T>(array: T[]): T[] {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}
///

async function ArtistList() {
  const response = await fetchData<{ data: ArtistProps[] }>(
    "items/artists?fields=*,events.*,events.events_id.*",
  );

  const artists_raw = response.data;

  // divide artists into popular and non-popular
  const popularArtists = artists_raw.filter((artist) => artist.isPopular);
  const nonPopularArtists = artists_raw.filter((artist) => !artist.isPopular);

  // same as with she shuffleArray function
  const shuffledNonPopularArtists = shuffleArray(nonPopularArtists);
  const shuffledPopularArtists = shuffleArray(popularArtists);
  ///

  const artists = [...shuffledPopularArtists, ...shuffledNonPopularArtists];

  return (
    <div className="p-4">
      <h1 className={"mb-6 text-center text-3xl font-extrabold"}>Artyści</h1>
      <div className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
        {artists.map((artist) => (
          <Artist key={artist.id} {...artist} />
        ))}
      </div>
    </div>
  );
}

export { ArtistList };
