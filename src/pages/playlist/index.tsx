//hocs
import withAuth from 'src/hocs/withAuth';

//components
import DashboardLayout from 'src/components/Layouts/Dashboard';

//icons
import { DotsThree, Clock, Play } from 'phosphor-react';

//styles
import * as S from 'src/styles/pages/playlist/styles';
import { Image, Text, Title } from 'src/styles/utils';

//images
import PlayIcon from 'src/images/play-icon.png';
import ImageTest from 'src/images/image-playlist-test.jpg';

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
                Rafael
              </Text>
              <Text fontSize="14px">&nbsp;• 14 músicas,&nbsp;</Text>
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
            <S.BodyListHeader>
              <li>#</li>
              <li>TÍTULO</li>
              <li>ÁLBUM OU PODCAST</li>
              <li>Adicionado em</li>
              <li>
                <Clock size={20} />
              </li>
            </S.BodyListHeader>

            <S.BodyListItens>
              <li>
                <p className="numberText">1</p>
                <Play
                  size={14}
                  weight="fill"
                  color="var(--white)"
                  className="playIcon"
                />
              </li>
              <li>
                <S.ImageAndMusicTitle>
                  <Image
                    src="https://i.scdn.co/image/ab67616d000048516ca5c90113b30c3c43ffb8f4"
                    width="40px"
                  />
                  <S.MusicTitleAndArtist>
                    <p>Soldier</p>
                    <span>Eminem</span>
                  </S.MusicTitleAndArtist>
                </S.ImageAndMusicTitle>
              </li>
              <li>
                <span>The Eminem Show</span>
              </li>
              <li>16 de set. de 2021</li>
              <li>4:41</li>
            </S.BodyListItens>
          </S.BodyList>
        </S.Body>
      </S.Container>
    </DashboardLayout>
  );
};

export default withAuth(Playlist);
