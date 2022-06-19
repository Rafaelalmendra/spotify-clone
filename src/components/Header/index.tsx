import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//hooks
import useAuth from 'src/hooks/useAuth';
import useAxiosFetch from 'src/hooks/useAxiosFetch';

//styles
import * as S from './styles';
import { Image, Text } from 'src/styles/utils';

//images
import ArrowUpIcon from 'src/images/arrow-up-icon.svg';
import ArrowDownIcon from 'src/images/arrow-down-icon.svg';
import ArrowLeftIcon from 'src/images/arrow-left-icon.svg';
import ArrowRightIcon from 'src/images/arrow-right-icon.svg';
import ExternalLinkIcon from 'src/images/external-link-icon.svg';

interface UserProps {
  display_name: string;
  images: {
    url: string;
  };
}

const Header = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useAxiosFetch('/me');
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    axios
      .get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        const name = res.data.display_name;
        const image = res.data.images[0].url;
        setUser({
          display_name: name,
          images: {
            url: image,
          },
        });
      });
  }, [token]);

  const logout = () => {
    localStorage.removeItem('access_token');
    navigate('/');
    window.location.reload();
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
          <img src={user?.images?.url} alt={`imagem de `} />
          <Text fontSize="14px" fontWeight="bold">
            {user?.display_name}
          </Text>
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
