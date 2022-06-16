//components
import { Title } from 'src/styles/utils';
import CardPlayList from '../CardPlaylist';

//styles
import * as S from './styles';

//images
import ImageTest from 'src/images/image-test.svg';

const FeedOne = () => {
  return (
    <S.Container>
      <Title margin="0 0 18px 0">Boa noite</Title>
      <S.PlaylistContainer>
        <CardPlayList text="Random" image={ImageTest} />
        <CardPlayList text="Test" image={ImageTest} />
        <CardPlayList text="Opa" image={ImageTest} />
        <CardPlayList text="Stream" image={ImageTest} />
      </S.PlaylistContainer>
    </S.Container>
  );
};

export default FeedOne;
