import { useNavigate } from 'react-router-dom';

//hooks
import useAuth from 'src/hooks/useAuth';

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
import ImageTest from 'src/images/image-test.svg';
import withAuth from 'src/hocs/withAuth';

const Home = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <S.Container>
        <Title margin="0 0 18px 0">Boa noite</Title>
        <S.PlaylistContainer>
          <CardPlayList text="Teste" image={ImageTest} />
        </S.PlaylistContainer>
      </S.Container>
    </DashboardLayout>
  );
};

export default withAuth(Home);
