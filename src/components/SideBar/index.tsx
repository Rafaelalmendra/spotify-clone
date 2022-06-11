//components
import ButtonWithIcon from '../Buttons/ButtonWithIcon';

//styles
import * as S from './styles';
import { Image } from '../../styles/utils';

//images
import HomeIcon from '../../images/home-icon.svg';
import SpotifyIcon from '../../images/logo-white.svg';
import SearchIcon from '../../images/search-icon.svg';
import LibraryIcon from '../../images/library-icon.svg';
import LikedSongsIcon from '../../images/liked-songs-icon.svg';
import YourEpisodiesIcon from '../../images/your-episodes-icon.svg';
import CreatePlaylistIcon from '../../images/create-playlist-icon.svg';

const SideBar = () => {
  return (
    <S.Container>
      <S.ImageContainer>
        <Image src={SpotifyIcon} width="139px" height="47px" />
      </S.ImageContainer>

      <S.OptionsTop>
        <ButtonWithIcon active icon={HomeIcon}>
          Início
        </ButtonWithIcon>
        <ButtonWithIcon icon={SearchIcon}>Buscar</ButtonWithIcon>
        <ButtonWithIcon icon={LibraryIcon}>Sua biblioteca</ButtonWithIcon>
      </S.OptionsTop>

      <S.OptionsMiddle>
        <ButtonWithIcon icon={CreatePlaylistIcon}>
          Criar playlist
        </ButtonWithIcon>
        <ButtonWithIcon icon={LikedSongsIcon}>Músicas curtidas</ButtonWithIcon>
        <ButtonWithIcon icon={YourEpisodiesIcon}>Seus episódios</ButtonWithIcon>
      </S.OptionsMiddle>
    </S.Container>
  );
};

export default SideBar;
