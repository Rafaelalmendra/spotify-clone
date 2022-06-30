//layout
import DashboardLayout from 'src/components/Layouts/Dashboard';

//components
import { Text, Title } from 'src/styles/utils';

//styles
import * as S from 'src/styles/pages/home/styles';

//images
import withAuth from 'src/hocs/withAuth';
import Playlists from 'src/components/Home/Playlists';

const Home = () => {
  return (
    <DashboardLayout>
      <S.Container>
        <Title margin="0 0 1.125rem 0">Boa noite</Title>
        <Playlists />

        <S.TextContainer>
          <Text fontSize="1.5rem" fontWeight="bold">
            Selecione uma playlist
          </Text>
        </S.TextContainer>
      </S.Container>
    </DashboardLayout>
  );
};

export default withAuth(Home);
