import { useEffect, useState } from 'react';

//hooks
import useAxiosFetch from 'src/hooks/useAxiosFetch';

//components
import CardPlayList from 'src/components/CardPlaylist';

//styles
import * as S from './styles';

interface PlaylistsProps {
  name: string;
  id: string;
  images: [
    {
      url: string;
    }
  ];
}

const Playlists = () => {
  const { data } = useAxiosFetch('/me/playlists', 6);
  const [playlists, setPlaylists] = useState<PlaylistsProps[]>([]);

  useEffect(() => {
    setPlaylists(data?.items);
  }, [data]);

  return (
    <S.PlaylistContainer>
      {playlists?.map((item) => (
        <CardPlayList
          key={item?.id}
          text={item?.name}
          image={item?.images[0]?.url}
        />
      ))}
    </S.PlaylistContainer>
  );
};

export default Playlists;
