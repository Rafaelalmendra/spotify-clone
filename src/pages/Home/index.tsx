//layout
import CardPlayList from 'src/components/CardPlaylist';
import DashboardLayout from 'src/components/Layouts/Dashboard';

//components
import { Title } from 'src/styles/utils';

//styles
import * as S from 'src/styles/pages/home/styles';

//images
import ImageTest from 'src/images/image-test.svg';

const Home = () => {
  return (
    <DashboardLayout>
      <S.Container>
        <Title margin="0 0 18px 0">Boa noite</Title>
        <S.PlaylistContainer>
          <CardPlayList text="Mix relax" image={ImageTest} />
          <CardPlayList text="Mix anos 2000" image={ImageTest} />
          <CardPlayList text="Mix indie" image={ImageTest} />
          <CardPlayList text="Mix anos 70" image={ImageTest} />
        </S.PlaylistContainer>
      </S.Container>
    </DashboardLayout>
  );
};

export default Home;
