import { Text } from 'src/styles/utils';
import * as S from './styles';

interface CardProps {
  image: string;
  title: string;
  infos?: string;
}

const Card = ({ image, title, infos }: CardProps) => {
  return (
    <S.Container>
      <img src={image} alt="imagem da playlist" />
      <S.Infos>
        <Text fontSize="1rem">{title}</Text>
        <Text fontSize="0.75rem">{infos}</Text>
      </S.Infos>
    </S.Container>
  );
};

export default Card;
