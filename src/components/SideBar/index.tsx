import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//hooks
import useAxiosFetch from 'src/hooks/useAxiosFetch';

//components
import ButtonWithIcon from '../Buttons/ButtonWithIcon';

//styles
import * as S from './styles';
import { Divider, Image, Text } from 'src/styles/utils';

//images
import HomeIcon from 'src/images/home-icon.svg';
import SpotifyIcon from 'src/images/logo-white.svg';
import SearchIcon from 'src/images/search-icon.svg';
import LibraryIcon from 'src/images/library-icon.svg';
import LikedSongsIcon from 'src/images/liked-songs-icon.svg';
import YourEpisodiesIcon from 'src/images/your-episodes-icon.svg';
import CreatePlaylistIcon from 'src/images/create-playlist-icon.svg';

interface PlaylistsProps {
  name: string;
  id: string;
}

const SideBar = () => {
  const { data } = useAxiosFetch('/me/playlists');
  const [playlists, setPlaylists] = useState<PlaylistsProps[]>([]);

  useEffect(() => {
    setPlaylists(data.items);
  }, [data]);

  return (
    <S.Container>
      <Link to="/home">
        <S.ImageContainer>
          <Image src={SpotifyIcon} width="139px" height="47px" />
        </S.ImageContainer>
      </Link>

      <S.OptionsTop>
        <Link to="/home">
          <ButtonWithIcon active icon={HomeIcon}>
            Início
          </ButtonWithIcon>
        </Link>
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

      <Divider />

      <S.OptionsBottom>
        {playlists?.map((item) => (
          <Link key={item.id} to={`/home/playlist/${item.id}`}>
            <Text fontSize="0.875rem" color="var(--gray)">
              {item.name}
            </Text>
          </Link>
        ))}
      </S.OptionsBottom>
    </S.Container>
  );
};

export default SideBar;
