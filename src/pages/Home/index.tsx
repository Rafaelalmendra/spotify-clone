import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//layout
import DashboardLayout from 'src/components/Layouts/Dashboard';

//components
import { Text, Title } from 'src/styles/utils';

//styles
import * as S from 'src/styles/pages/home/styles';

//images
import withAuth from 'src/hocs/withAuth';
import Playlists from 'src/components/Home/Playlists';
import Episodies from 'src/components/Home/Episodies';

interface EpisodiesProps {
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
  const [episodies, setEpisodies] = useState<EpisodiesProps[]>([]);

  return (
    <DashboardLayout>
      <S.Container>
        <Title margin="0 0 1.125rem 0">Boa noite</Title>
        <Playlists />

        <S.TextContainer>
          <Text fontSize="1.5rem" fontWeight="bold">
            Programas para conhecer
          </Text>
          <Text fontSize="12px">VER TUDO</Text>
        </S.TextContainer>
        <Episodies />
      </S.Container>
    </DashboardLayout>
  );
};

export default withAuth(Home);
