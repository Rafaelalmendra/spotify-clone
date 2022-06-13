//components

//styles
import * as S from './styles';
import { Image } from '../../styles/utils';

//images
import ArrowLeftIcon from '../../images/arrow-left-icon.svg';
import ArrowRightIcon from '../../images/arrow-right-icon.svg';

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.NavigationContainer>
        <S.ArrowContainer>
          <Image src={ArrowLeftIcon} width="24px" height="24px" />
        </S.ArrowContainer>

        <S.ArrowContainer disabled>
          <Image src={ArrowRightIcon} width="24px" height="24px" />
        </S.ArrowContainer>
      </S.NavigationContainer>
    </S.HeaderContainer>
  );
};

export default Header;
