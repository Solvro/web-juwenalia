import Image from 'next/image';
import Link from 'next/link';
import { API_URL } from '@/config/api';
import { ArtistProps } from '@/lib/types';

const Artist = async ({ url, id, name, description, image }: ArtistProps) => {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <div key={id}>
        <h2 className={'font-bold'}>{name}</h2>
        <p className={'w-1/3'}>{description}</p>
        {url}
        <Image
          className={'aspect-square object-cover'}
          src={`${API_URL}/assets/${image}`}
          alt='Picture of the artist'
          width={200}
          height={200}
        />
      </div>
    </Link>
  );
};

export { Artist };
