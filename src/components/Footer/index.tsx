import { Text } from 'src/styles/utils';
import * as S from './styles';

const Footer = () => (
  <S.Container>
    <Text>
      Developed by&nbsp;
      <a
        target="_blank"
        href="https://rafaelalmendra.com"
        rel="noopener noreferrer"
      >
        <span>Rafael Almendra</span>
      </a>
    </Text>
  </S.Container>
);

export default Footer;
