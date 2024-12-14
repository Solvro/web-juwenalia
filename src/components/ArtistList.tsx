import { ArtistProps } from "@/lib/types";
import { fetchData } from "@/lib/api";
import { Artist } from "@/components/Artist";
import Link from "next/link";

// if we need shuffling the artists, so everyone in their respective P/NP category
// gets somewhat even representation on our site
function shuffleArray<T>(array: T[]): T[] {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}
///

const ArtistList = async () => {
  const response = await fetchData<{ data: ArtistProps[] }>(
    "items/artists?fields=*,events.*,events.events_id.*, events.events_id.location.*"
  );

  const artists_raw = response.data;

  // divide artists into popular and non-popular
  const popularArtists = artists_raw.filter(
    (artist) => artist.isPopular
  );
  const nonPopularArtists = artists_raw.filter(
    (artist) => !artist.isPopular
  );

  // same as with she shuffleArray function
  const shuffledNonPopularArtists = shuffleArray(nonPopularArtists);
  const shuffledPopularArtists = shuffleArray(popularArtists);
  ///

  const artists = [...shuffledPopularArtists, ...shuffledNonPopularArtists];

  return (
   <div className="">
    <div className="mx-8 px-12">
      <h1 className={"text-2xl md:text-5xl font-extrabold text-center md:text-left my-8"}>
        Tegoroczni artyści
      </h1>
    </div>
    <hr className="border-t border-gray-400 my-2" />
    <div className="px-8 mt-8 mx-auto">
      {artists && artists.length > 0 ? (
        // Calculate rows for the grid
        Array.from({ length: Math.ceil(artists.length / 3) }).map((_, rowIndex) => (
          <div key={rowIndex}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {artists
                .slice(rowIndex * 3, rowIndex * 3 + 3) // Grab 3 artists per row
                .map((artist) => (
                  <Artist key={artist.id} {...artist} />
                ))}
            </div>
            <hr className="border-t border-gray-400 my-2 -mx-8 w-screen" /> 
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold text-2xl">Brak Artystów</h1>
          <p className="p-3 text-xl">
            Nie udało nam się znaleźć podanych artystów. Wróć tutaj później!
          </p>
          <Link href="#" className={"border-2 border-black rounded-2xl p-3"}>
            Odśwież
          </Link>
        </div>
      )}
    </div>
  </div> 
  );
};

export { ArtistList };
