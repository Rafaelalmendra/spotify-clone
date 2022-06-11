//styles
import { Image } from '../../styles/utils';
import * as S from './styles';

//images
import SpotifyIcon from '../../images/logo-white.svg';

const SideBar = () => {
  return (
    <S.Container>
      <Image src={SpotifyIcon} width="164px" height="49px" />
    </S.Container>
  );
};

export default SideBar;
