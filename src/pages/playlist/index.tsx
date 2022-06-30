//hocs
import withAuth from 'src/hocs/withAuth';

//components
import DashboardLayout from 'src/components/Layouts/Dashboard';

//styles
import * as S from 'src/styles/pages/playlist/styles';

//images
import ImageTest from 'src/images/image-playlist-test.jpg';
import { Image, Text, Title } from 'src/styles/utils';

const Playlist = () => {
  return (
    <DashboardLayout>
      <S.Container>
        <S.Header>
          <Image src={ImageTest} alt="Capa da playlist" />

          <S.HeaderInfos>
            <Text fontSize="12px" fontWeight="600">
              PLAYLIST
            </Text>

            <Title margin="18px 0 0 0" fontSize="96px">
              Podcast
            </Title>

            <S.InfosPlaylist>
              <Text fontSize="14px" fontWeight="600">
                Rafael •&nbsp;
              </Text>
              <Text fontSize="14px">14 músicas,&nbsp;</Text>
              <Text fontSize="14px" color="var(--gray)">
                11h 42min
              </Text>
            </S.InfosPlaylist>
          </S.HeaderInfos>
        </S.Header>
      </S.Container>
    </DashboardLayout>
  );
};

export default withAuth(Playlist);
