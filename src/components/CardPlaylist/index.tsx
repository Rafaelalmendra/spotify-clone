//styles
import * as S from './styles';
import { Image, Text } from 'src/styles/utils';

//images
import PlayIcon from 'src/images/play-icon.png';

interface CardPlaylistProps {
  image: any;
  text: string;
}

const CardPlayList = ({ image, text }: CardPlaylistProps) => {
  return (
    <S.Container>
      <S.ImageAndTitle>
        <Image src={image} />
        <Text fontSize="20px" fontWeight="bold">
          {text}
        </Text>
      </S.ImageAndTitle>

      <div className="playIcon">
        <Image src={PlayIcon} />
      </div>
    </S.Container>
  );
};

export default CardPlayList;
