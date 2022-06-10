//components
import LoginButton from '../../components/LoginButton';

//utils
import { Image, Title } from '../../styles/utils';

//styles
import * as S from '../../styles/pages/login/styles';

//images
import AppleIcon from '../../images/apple-icon.svg';
import GoogleIcon from '../../images/google-icon.svg';
import SpotifyIcon from '../../images/logo-white.svg';

const Login = () => {
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
        <Title fontSize="1.25rem">Faça login no Spotify</Title>

        <LoginButton border backgroundColor="transparent" icon={GoogleIcon}>
          Continuar com o Google
        </LoginButton>

        <LoginButton backgroundColor="var(--gray-light)" icon={AppleIcon}>
          Continuar com o Apple
        </LoginButton>
      </S.Main>
    </S.Container>
  );
};

export default Login;
