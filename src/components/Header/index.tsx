import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//hooks
import useAuth from '../../hooks/useAuth';

//components

//styles
import * as S from './styles';
import { Image, Text } from '../../styles/utils';

//images
import ArrowLeftIcon from '../../images/arrow-left-icon.svg';
import ArrowRightIcon from '../../images/arrow-right-icon.svg';
import ArrowDownIcon from '../../images/arrow-down-icon.svg';
import ArrowUpIcon from '../../images/arrow-up-icon.svg';
import ExternalLinkIcon from '../../images/external-link-icon.svg';

const Header = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const signOut = () => {
    setUser(undefined);
    navigate('/');
  };

  const name = user?.name?.substring(0, user?.name?.indexOf(' '));
  const avatar = user?.avatar;
  console.log(avatar);

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

      <S.Profile>
        <S.ProfileContainer onClick={() => setIsOpen(!isOpen)}>
          <img src="https://lh3.googleusercontent.com/a-/AOh14GisVE7OMTRPJfj3c9qQLpqPmt84JVAwekFBtbaj=s96-c" />
          <Text>{name}</Text>
          {isOpen ? (
            <Image src={ArrowUpIcon} width="24px" height="24px" />
          ) : (
            <Image src={ArrowDownIcon} width="24px" height="24px" />
          )}
        </S.ProfileContainer>
        {isOpen && (
          <S.ProfileOpenContainer>
            <S.ProfileOpenItem disabled>
              <Text fontSize="14px">Conta</Text>
              <Image src={ExternalLinkIcon} width="24px" height="24px" />
            </S.ProfileOpenItem>
            <S.ProfileOpenItem disabled>
              <Text fontSize="14px">Perfil</Text>
            </S.ProfileOpenItem>
            <S.ProfileOpenItem onClick={signOut}>
              <Text fontSize="14px">Sair</Text>
            </S.ProfileOpenItem>
          </S.ProfileOpenContainer>
        )}
      </S.Profile>
    </S.HeaderContainer>
  );
};

export default Header;
