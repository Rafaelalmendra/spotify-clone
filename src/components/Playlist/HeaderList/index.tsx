//icons
import { Clock } from 'phosphor-react';

//styles
import * as S from './styles';

const HeaderList = () => {
  return (
    <S.BodyListHeader>
      <li>#</li>
      <li>TÍTULO</li>
      <li>ÁLBUM OU PODCAST</li>
      <li>Adicionado em</li>
      <li>
        <Clock size={20} />
      </li>
    </S.BodyListHeader>
  );
};

export default HeaderList;
