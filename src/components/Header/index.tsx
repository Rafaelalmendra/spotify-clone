import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//hooks
import useAuth from 'src/hooks/useAuth';

//styles
import * as S from './styles';
import { Image, Text } from 'src/styles/utils';

//images
import ArrowUpIcon from 'src/images/arrow-up-icon.svg';
import ArrowDownIcon from 'src/images/arrow-down-icon.svg';
import ArrowLeftIcon from 'src/images/arrow-left-icon.svg';
import ArrowRightIcon from 'src/images/arrow-right-icon.svg';
import ExternalLinkIcon from 'src/images/external-link-icon.svg';

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

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
          <img
            src="https://lh3.googleusercontent.com/a-/AOh14GisVE7OMTRPJfj3c9qQLpqPmt84JVAwekFBtbaj=s96-c"
            alt={`imagem de `}
          />
          <Text>Rafael</Text>
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
            <S.ProfileOpenItem onClick={logout}>
              <Text fontSize="14px">Sair</Text>
            </S.ProfileOpenItem>
          </S.ProfileOpenContainer>
        )}
      </S.Profile>
    </S.HeaderContainer>
  );
};

export default Header;
