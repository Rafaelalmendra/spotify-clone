import { useEffect } from 'react';
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

const Home = () => {
  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    if (!token) {
      setTimeout(() => {
        navigate('/');
      }, 8000);
    }
  }, [token]);

  return (
    <DashboardLayout>
      {!token && (
        <Modal>
          <Text
            fontSize="34px"
            fontWeight="bold"
            textAlign="center"
            margin="0 0 38px 0"
          >
            Você precisa estar logado para acessar esta página
          </Text>
          <Button
            onClick={() => navigate('/')}
            backgroundColor="var(--green)"
            width="348px"
          >
            Faça o Login
          </Button>
          <Text margin="38px 0 0 0" color="var(--gray)">
            Você será redirecionado automaticamente...
          </Text>
        </Modal>
      )}
      <S.Container>
        <Title margin="0 0 18px 0">Boa noite</Title>
        <S.PlaylistContainer>
          <CardPlayList text="Mix relax" image={ImageTest} />
          <CardPlayList text="Mix anos 2000" image={ImageTest} />
          <CardPlayList text="Mix indie" image={ImageTest} />
          <CardPlayList text="Mix anos 70" image={ImageTest} />
        </S.PlaylistContainer>
      </S.Container>
    </DashboardLayout>
  );
};

export default Home;
