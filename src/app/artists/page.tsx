// import { ArtistList } from "@/components/artists/artist-list";
import { NoArtistInfo } from "@/components/no-artist-info";

export default function ArtistPage() {
  return (
    // <ArtistList />
    <NoArtistInfo errorMessage="Nie udało nam się znaleźć żadnych artystów. Wróć tutaj później!" />
  );
}
