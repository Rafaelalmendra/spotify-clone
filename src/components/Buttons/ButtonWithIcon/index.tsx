import { Image } from 'src/styles/utils';
import * as S from './styles';

interface ButtonWithIconProps {
  icon?: any; //procurar a tipagem certa
  color?: string;
  active?: boolean;
  fontSize?: string;
  fontWeight?: string;
  children: React.ReactNode;
}

const ButtonWithIcon = ({
  color,
  children,
  fontSize,
  fontWeight,
  icon,
  active,
}: ButtonWithIconProps) => {
  return (
    <S.ButtonWithIconContainer
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      active={active}
    >
      <Image src={icon} width="20px" height="20px" />
      {children}
    </S.ButtonWithIconContainer>
  );
};

export default ButtonWithIcon;
