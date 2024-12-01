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
  isPopular,
}: ArtistProps) => {
  return (
    <div>
      <div
        key={id}
        className="border-2 p-2 border-gray-300 rounded-lg text-xl flex flex-col items-center text-center"
      >
        <h2 className={"font-bold text-2xl mb-2"}>{name}</h2>
        <div className="w-auto max-w-md">
          <p>{description}</p>
          <Image
            className={"aspect-square object-cover rounded-lg"}
            src={`${API_URL}/assets/${image}`}
            alt="Picture of the artist"
            width={400} 
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
          <div className="py-2 flex flex-row justify-center items-center">
            {instagramUrl && (
              <Link
                href={instagramUrl}
                target="_black"
                rel="noopener noreferrer"
              >
                <Image
                  className={"mx-12"}
                  src={`/buttons/instagram_icon.png`}
                  alt="Link do IG artysty."
                  width="64"
                  height="64"
                />
              </Link>
            )}
            {spotifyUrl && (
              <Link href={spotifyUrl} target="_black" rel="noopener noreferrer">
                <Image
                  className={"mx-8"}
                  src={`/buttons/spotify_logo_full.png`}
                  alt="Link do Spotify artysty."
                  width="192"
                  height="96"
                />
              </Link>
            )}
          </div>
        </div>
        {isPopular && <h1>DEBUG: Hot</h1>}
      </div>
    </div>
  );
};

export { Artist };
