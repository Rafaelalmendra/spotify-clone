//components
import Header from '../../Header';
import DownBar from '../../DownBar';
import SideBar from '../../SideBar';

//styles
import * as S from './styles';

interface DashboardLaoyoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLaoyoutProps) => {
  return (
    <S.Container>
      <SideBar />
      <DownBar />

      <S.Layout>
        <Header />
        {children}
      </S.Layout>
    </S.Container>
  );
};

export default DashboardLayout;
