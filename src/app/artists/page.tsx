// import { ArtistList } from "@/components/artists/artist-list";
import { NoArtistInfo } from "@/components/no-artist-info";

export default function ArtistPage() {
  return (
    // <ArtistList />
    <NoArtistInfo errorMessage="Artyści nie są jeszcze dostępni. Wróć tutaj później!" />
  );
}
