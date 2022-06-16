//components
import { Image, Text } from 'src/styles/utils';

//styles
import * as S from './styles';

interface CardPlaylistProps {
  image: any;
  text: string;
}

const CardPlayList = ({ image, text }: CardPlaylistProps) => {
  return (
    <S.Container>
      <Image src={image} />
      <Text fontSize="20px" fontWeight="bold">
        {text}
      </Text>
    </S.Container>
  );
};

export default CardPlayList;
