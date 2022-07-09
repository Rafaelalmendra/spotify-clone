//utils
import { Image } from 'src/styles/utils';

//styles
import * as S from './styles';

//icons
import { DotsThree, Play, Heart } from 'phosphor-react';

const ItensList = () => {
  return (
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
      <li>
        <S.DateAndFavorite>
          16 de set. de 2021
          <Heart className="optionsIcon" size={20} weight="light" />
        </S.DateAndFavorite>
      </li>
      <li>
        <S.TimeAndOptions>
          4:41
          <DotsThree className="optionsIcon" size={28} weight="regular" />
        </S.TimeAndOptions>
      </li>
    </S.BodyListItens>
  );
};

export default ItensList;
