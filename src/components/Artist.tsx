import Image from 'next/image';
import Link from 'next/link';
import { API_URL } from '@/config/api';
import { ArtistProps } from '@/lib/types';

const Artist = async ({ id, name, description, image, instagramUrl, spotifyUrl, isPopular }: ArtistProps) => {
  return (
    <div>
      <div key={id}>
        <h2 className={'font-bold'}>{name}</h2>
        <p className={'w-1/3'}>{description}</p>
        <Image
          className={'aspect-square object-cover'}
          src={`${API_URL}/assets/${image}`}
          alt='Picture of the artist'
          width={200}
          height={200}
        />
        { instagramUrl ?
        <Link href={instagramUrl} target="_black" rel="noopener noreferrer">
          <span className='p-4 m-4'>Instagram</span>
        </Link>
        : <h1>Ten artysta nie podal instagrama</h1>
        }
        { spotifyUrl ?
        <Link href={spotifyUrl} target="_black" rel="noopener noreferrer">
          <span className='p-4 m-4'>Spotify</span>
        </Link>
        : <h1>Ten artysta nie podal spotifaja</h1>
        }
        { isPopular && <h1>Hot</h1> }
      </div>
    </div>
  );
};

export { Artist };
