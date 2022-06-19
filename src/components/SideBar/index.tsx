import { useEffect, useState } from 'react';

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
import axios from 'axios';
import useAuth from 'src/hooks/useAuth';

interface PlaylistsProps {
  name: string;
  id: string;
}

const SideBar = () => {
  const { token } = useAuth();
  const { data } = useAxiosFetch('/me/playlists');
  const [playlists, setPlaylists] = useState<PlaylistsProps[]>([]);

  useEffect(() => {
    axios
      .get('https://api.spotify.com/v1/me/playlists', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        const { items } = res.data;
        setPlaylists(items);
      });
  }, [token]);

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

      <Divider />

      <S.OptionsBottom>
        {playlists?.map((item) => (
          <Text key={item.id} fontSize="0.875rem" color="var(--gray)">
            {item.name}
          </Text>
        ))}
      </S.OptionsBottom>
    </S.Container>
  );
};

export default SideBar;
