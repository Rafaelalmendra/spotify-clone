//utils
import { Image } from 'src/styles/utils';

//styles
import * as S from './styles';

interface ButtonLoginProps {
  icon?: any; //procurar a tipagem certa
  border?: boolean;
  onClick?: () => Promise<void> | void;
  backgroundColor?: string;
  children?: React.ReactNode;
}

const ButtonLogin = ({
  icon,
  border,
  onClick,
  children,
  backgroundColor,
}: ButtonLoginProps) => {
  return (
    <S.ButtonLoginContainer
      onClick={onClick}
      backgroundColor={backgroundColor}
      border={border}
    >
      {!!icon && <Image src={icon} alt="Icone" width="30px" height="30px" />}
      {children}
    </S.ButtonLoginContainer>
  );
};

export default ButtonLogin;
