//utils
import { Image } from '../../styles/utils';

//styles
import * as S from './styles';

interface LoginButtonProps {
  icon?: any; //procurar a tipagem certa
  border?: boolean;
  backgroundColor?: string;
  children: React.ReactNode;
}

const LoginButton = ({
  icon,
  border,
  children,
  backgroundColor,
}: LoginButtonProps) => {
  return (
    <S.ButtonContainer backgroundColor={backgroundColor} border={border}>
      {!!icon && <Image src={icon} alt="Icone" width="30px" height="30px" />}
      {children}
    </S.ButtonContainer>
  );
};

export default LoginButton;
