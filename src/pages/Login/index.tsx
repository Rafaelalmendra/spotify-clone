import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const { token } = useAuth();

  const CLIENT_ID = import.meta.env.VITE_APP_CLIENT_ID;
  const REDIRECT_URI = 'http://localhost:3000/home';
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'token';

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
        <ButtonLogin backgroundColor="var(--green)">
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            <Title fontSize="1.25rem">Faça Login no Spotify</Title>
          </a>
        </ButtonLogin>
      </S.Main>
    </S.Container>
  );
};

export default Login;
