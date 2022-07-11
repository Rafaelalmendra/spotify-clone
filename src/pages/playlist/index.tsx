import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

const Playlist = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useAxiosFetch(`/playlists/${id}`);

  const [playlist, setPlaylist] = useState<any>([]);

  useEffect(() => {
    setPlaylist(data);
  }, [data]);

  console.log(playlist);

  return (
    <DashboardLayout>
      <S.Container>
        <S.Header>
          {playlist.length === 0 ? (
            <S.CardImage>
              <Text>Carregando a imagem...</Text>
            </S.CardImage>
          ) : (
            <Image src={playlist?.images[0]?.url} alt="Capa da playlist" />
          )}

          <S.HeaderInfos>
            <Text fontSize="12px" fontWeight="600">
              PLAYLIST
            </Text>

            <Title margin="18px 0 0 0" fontSize="82px">
              {playlist?.name}
            </Title>

            <S.InfosPlaylist>
              <Text fontSize="14px" fontWeight="600">
                {playlist?.owner?.display_name}
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

            <DotsThree size={45} color="var(--gray)" />
          </S.BodyOptions>

          <S.BodyList>
            <HeaderList />

            {playlist?.tracks?.items?.map((item: any, index: number) => (
              <ItensList
                key={index}
                number={index + 1}
                name={item?.track?.name}
                album={item?.track?.album?.name}
                artist={item?.track?.artists[0]?.name}
                date={item?.track?.album?.release_date}
                image={item?.track?.album?.images[0]?.url}
                duration={item?.track?.duration_ms}
              />
            ))}
          </S.BodyList>
        </S.Body>
      </S.Container>
    </DashboardLayout>
  );
};

export default withAuth(Playlist);
