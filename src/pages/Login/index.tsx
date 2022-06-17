//hooks
import useAuth from 'src/hooks/useAuth';

//components
import { Image, Title } from 'src/styles/utils';
import ButtonLogin from 'src/components/Buttons/ButtonLogin';

//styles
import * as S from 'src/styles/pages/login/styles';

//images
import SpotifyIcon from 'src/images/logo-white.svg';

const Login = () => {
  const { handleLogin } = useAuth();

  return (
    <S.Container>
      <S.Header>
        <Image
          src={SpotifyIcon}
          alt="Icone do Spotify"
          width="230px"
          widthMobile="190px"
          height="76px"
        />
      </S.Header>

      <S.Main>
        <ButtonLogin onClick={handleLogin} backgroundColor="var(--green)">
          <Title fontSize="1.25rem">Faça Login no Spotify</Title>
        </ButtonLogin>
      </S.Main>
    </S.Container>
  );
};

export default Login;
