//components
import ButtonWithIcon from '../Buttons/ButtonWithIcon';

//styles
import * as S from './styles';
import { Image } from '../../styles/utils';

//images
import SpotifyIcon from '../../images/logo-white.svg';
import HomeIcon from '../../images/home-icon.svg';

const SideBar = () => {
  return (
    <S.Container>
      <Image
        src={SpotifyIcon}
        width="164px"
        height="49px"
        margin="1.9375rem 0 1.9375rem 0"
      />
      <ButtonWithIcon icon={HomeIcon}>Home</ButtonWithIcon>
    </S.Container>
  );
};

export default SideBar;
