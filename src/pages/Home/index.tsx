import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//hooks
import useAxiosFetch from 'src/hooks/useAxiosFetch';

//layout
import DashboardLayout from 'src/components/Layouts/Dashboard';

//components
import Modal from 'src/components/Modal';
import { Text, Title } from 'src/styles/utils';
import Button from 'src/components/Buttons/Button';
import CardPlayList from 'src/components/CardPlaylist';

//styles
import * as S from 'src/styles/pages/home/styles';

//images
import withAuth from 'src/hocs/withAuth';

interface PlaylistsProps {
  name: string;
  id: string;
  images: [
    {
      url: string;
    }
  ];
}

const Home = () => {
  const navigate = useNavigate();
  const { data } = useAxiosFetch('/me/playlists', 6);
  const [playlists, setPlaylists] = useState<PlaylistsProps[]>([]);

  useEffect(() => {
    setPlaylists(data?.items);
  }, [data]);

  return (
    <DashboardLayout>
      <S.Container>
        <Title margin="0 0 18px 0">Boa noite</Title>
        <S.PlaylistContainer>
          {playlists?.map((item) => (
            <CardPlayList
              key={item?.id}
              text={item?.name}
              image={item?.images[0]?.url}
            />
          ))}
        </S.PlaylistContainer>
      </S.Container>
    </DashboardLayout>
  );
};

export default withAuth(Home);
