import { useEffect, useState } from 'react';

//hocs
import withAuth from 'src/hocs/withAuth';

//hooks
import useAxiosFetch from 'src/hooks/useAxiosFetch';

//components
import ItensList from 'src/components/Playlist/ItensList';
import HeaderList from 'src/components/Playlist/HeaderList';
import DashboardLayout from 'src/components/Layouts/Dashboard';

//styles
import * as S from 'src/styles/pages/playlist/styles';
import { Image, Text, Title } from 'src/styles/utils';

//images-and-icons
import { DotsThree } from 'phosphor-react';
import PlayIcon from 'src/images/play-icon.png';
import ImageTest from 'src/images/image-playlist-test.jpg';
import { useParams } from 'react-router-dom';

const Playlist = () => {
  const { id } = useParams<{ id: string }>();
  const [playlist, setPlaylist] = useState<any>([]);
  const { data } = useAxiosFetch(`/playlists/${id}`);

  useEffect(() => {
    setPlaylist(data);
  }, [data]);

  console.log(playlist);

  return (
    <DashboardLayout>
      <S.Container>
        <S.Header>
          <Image src={playlist?.images[0]?.url} alt="Capa da playlist" />

          <S.HeaderInfos>
            <Text fontSize="12px" fontWeight="600">
              PLAYLIST
            </Text>

            <Title margin="18px 0 0 0" fontSize="82px">
              {playlist?.name}
            </Title>

            <S.InfosPlaylist>
              <Text fontSize="14px" fontWeight="600">
                Rafael
              </Text>
              <Text fontSize="14px">
                &nbsp;• {playlist?.tracks?.total} músicas,&nbsp;
              </Text>
              <Text fontSize="14px" color="var(--gray)">
                11h 42min
              </Text>
            </S.InfosPlaylist>
          </S.HeaderInfos>
        </S.Header>

        <S.Body>
          <S.BodyOptions>
            <S.PlayIcon>
              <Image src={PlayIcon} width="40px" height="40px" />
            </S.PlayIcon>

            <DotsThree size={45} color="var(--white)" />
          </S.BodyOptions>

          <S.BodyList>
            <HeaderList />

            <ItensList />
          </S.BodyList>
        </S.Body>
      </S.Container>
    </DashboardLayout>
  );
};

export default withAuth(Playlist);
