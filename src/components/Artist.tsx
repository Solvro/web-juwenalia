import Image from "next/image";
import Link from "next/link";
import { API_URL } from "@/config/api";
import { ArtistProps } from "@/lib/types";

const Artist = async ({
  id,
  name,
  description,
  image,
  instagramUrl,
  spotifyUrl,
  isPopular, // may be used to indicate popularity, tho improbable
}: ArtistProps) => {
  return (
    <div
      key={id}
      className="border-2 p-2 border-gray-300 rounded-lg text-xl flex flex-col items-center text-center"
    >
      <h2 className={"font-bold text-3xl p-2 mb-2"}>{name}</h2>
      <div className="w-auto max-w-md">
        <Image
          className={"aspect-square object-cover rounded-lg"}
          src={`${API_URL}/assets/${image}`}
          alt="Picture of the artist"
          width={400}
          height={400}
          style={{ width: "100%", height: "auto" }}
        />
        <div className="flex flex-row justify-center items-center p-1">
          {instagramUrl && (
            <Link
              role="button"
              href={instagramUrl}
              target="_black"
              rel="noopener noreferrer"
            >
              <Image
                className={"mx-4 md:mx-12 rounded-xl p-1 hover:from-fuchsia-500 hover:to-amber-400 bg-gradient-to-bl from-fuchsia-300 to-amber-200"}
                src={`/buttons/instagram_icon.png`}
                alt="Link do IG artysty."
                width="64"
                height="64"
              />
            </Link>
          )}
          {spotifyUrl && (
            <Link
              href={spotifyUrl}
              target="_black"
              rel="noopener noreferrer"
              role="button"
            >
              <Image
                className={"mx-4 md:mx-8 rounded-xl p-1 bg-green-200 hover:bg-green-400"}
                src={`/buttons/spotify_logo_full.png`}
                alt="Link do Spotify artysty."
                width="192"
                height="96"
              />
            </Link>
          )}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export { Artist };
