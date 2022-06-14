import { useNavigate } from 'react-router-dom';

//hooks
import useAuth from 'src/hooks/useAuth';

//components
import ButtonLogin from 'src/components/Buttons/ButtonLogin';

//utils
import { Image, Title } from 'src/styles/utils';

//styles
import * as S from 'src/styles/pages/login/styles';

//images
import AppleIcon from 'src/images/apple-icon.svg';
import GoogleIcon from 'src/images/google-icon.svg';
import SpotifyIcon from 'src/images/logo-white.svg';

const Login = () => {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth();

  const handleSiginIn = async () => {
    if (!user) {
      await signInWithGoogle();
    }
    navigate('/Home');
  };

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
        <ButtonLogin
          onClick={handleSiginIn}
          border
          icon={GoogleIcon}
          backgroundColor="transparent"
        >
          Continuar com o Google
        </ButtonLogin>

        <ButtonLogin backgroundColor="var(--grayPrimary)" icon={AppleIcon}>
          Continuar com o Apple
        </ButtonLogin>
      </S.Main>
    </S.Container>
  );
};

export default Login;
