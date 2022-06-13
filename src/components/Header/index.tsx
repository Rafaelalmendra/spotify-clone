//components

//styles
import * as S from './styles';
import { Image, Text } from '../../styles/utils';

//images
import ArrowLeftIcon from '../../images/arrow-left-icon.svg';
import ArrowRightIcon from '../../images/arrow-right-icon.svg';
import ArrowDownIcon from '../../images/arrow-down-icon.svg';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const { user } = useAuth();
  const name = user?.name?.substring(0, user?.name?.indexOf(' '));

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

      <S.ProfileContainer>
        <img src={user?.avatar} />
        <Text>{name}</Text>
        <Image src={ArrowDownIcon} width="24px" height="24px" />
      </S.ProfileContainer>
    </S.HeaderContainer>
  );
};

export default Header;
