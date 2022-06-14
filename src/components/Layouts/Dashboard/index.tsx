import withAuth from 'src/hocs/withAuth';
import DownBar from '../../DownBar';
import Header from '../../Header';
import SideBar from '../../SideBar';

import * as S from './styles';

interface DashboardLaoyoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLaoyoutProps) => {
  return (
    <>
      <S.Container>
        <SideBar />
        <DownBar />

        <S.Layout>
          <Header />
          {children}
        </S.Layout>
      </S.Container>
    </>
  );
};

export default withAuth(DashboardLayout);
