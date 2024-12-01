import { ArtistProps } from '@/lib/types';
import { fetchData } from '@/lib/api';
import { Artist } from '@/components/Artist';

const ArtistList = async () => {
  const response = await fetchData<{ data: ArtistProps[] }>(
    'items/artists?fields=*'
  );

  const artists = response.data;

  return (
    <div className='p-4'>
      <h1 className={'text-xl font-extrabold mb-6'}>Artists</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto'>
      {artists.map((artist) => (
        <Artist key={artist.id} {...artist} />
      ))}
      </div>
    </div>
  );
};

export { ArtistList };
