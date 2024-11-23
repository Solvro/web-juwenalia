import { ArtistProps } from '@/lib/types';
import { fetchData } from '@/lib/api';
import Image from 'next/image';

const ArtistList = async () => {
  const response = await fetchData<{ data: ArtistProps[] }>(
    'items/artists?fields=*'
  );

  const artists = response.data;

  return (
    <div className='p-4'>
      <h1 className={'text-xl font-extrabold mb-6'}>Artists</h1>
      {artists.map((artist) => (
        <div key={artist.id}>
          <h2 className={'font-bold'}>{artist.name}</h2>
          <p className={'w-1/3'}>{artist.description}</p>
          {artist.url}
          <Image
            src={`https://cms.juwenalia.solvro.pl/assets/${artist.image}`}
            alt='Picture of the artist'
            width={200}
            height={200}
          />
        </div>
      ))}
    </div>
  );
};

export { ArtistList };
