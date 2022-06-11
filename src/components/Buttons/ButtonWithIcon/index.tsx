import { Image } from '../../../styles/utils';
import * as S from './styles';

interface ButtonWithIconProps {
  children: React.ReactNode;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  icon?: any;
}

const ButtonWithIcon = ({
  color,
  children,
  fontSize,
  fontWeight,
  icon,
}: ButtonWithIconProps) => {
  return (
    <S.ButtonWithIconContainer
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      <Image src={icon} width="24px" height="24px" />
      {children}
    </S.ButtonWithIconContainer>
  );
};

export default ButtonWithIcon;
