//utils
import { Image, Text } from 'src/styles/utils';

//styles
import * as S from './styles';

//icons
import { DotsThree, Play, Heart } from 'phosphor-react';

interface ItensListProps {
  number: number;
  image: string;
  name: string;
  artist: string;
  album: string;
  date: string;
  duration: number;
}

const ItensList = ({
  number,
  image,
  name,
  artist,
  album,
  date,
  duration,
}: ItensListProps) => {
  return (
    <S.BodyListItens>
      <li>
        <Text fontSize="0.875rem" color="var(--gray)" className="numberText">
          {number}
        </Text>
        <Play
          size={14}
          weight="fill"
          color="var(--white)"
          className="playIcon"
        />
      </li>
      <li>
        <S.ImageAndMusicTitle>
          <Image src={image} width="40px" />
          <S.MusicTitleAndArtist>
            <p>{name}</p>
            <span>{artist}</span>
          </S.MusicTitleAndArtist>
        </S.ImageAndMusicTitle>
      </li>
      <li>
        <span>{album}</span>
      </li>
      <li>
        <S.DateAndFavorite>
          {date}
          <Heart className="optionsIcon" size={20} weight="light" />
        </S.DateAndFavorite>
      </li>
      <li>
        <S.TimeAndOptions>
          {duration}
          <DotsThree className="optionsIcon" size={28} weight="regular" />
        </S.TimeAndOptions>
      </li>
    </S.BodyListItens>
  );
};

export default ItensList;
