//styles
import * as S from './styles';

interface ButtonProps {
  width?: string;
  border?: boolean;
  onClick?: () => Promise<void> | void;
  backgroundColor?: string;
  children?: React.ReactNode;
}

const Button = ({
  width,
  border,
  onClick,
  children,
  backgroundColor,
}: ButtonProps) => {
  return (
    <S.ButtonContainer
      width={width}
      border={border}
      onClick={onClick}
      backgroundColor={backgroundColor}
    >
      {children}
    </S.ButtonContainer>
  );
};

export default Button;
