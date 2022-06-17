//styles
import * as S from './styles';

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => (
  <>
    <S.DarkBackground />
    <S.ModalCard>
      <S.Content>{children}</S.Content>
    </S.ModalCard>
  </>
);

export default Modal;
