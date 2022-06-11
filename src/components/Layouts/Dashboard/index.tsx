import withAuth from '../../../hocs/withAuth';
import DownBar from '../../DownBar';
import SideBar from '../../SideBar';

import * as S from './styles';

interface DashboardLaoyoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLaoyoutProps) => {
  return (
    <S.Container>
      <SideBar />
      <DownBar />
      <S.Layout>{children}</S.Layout>
    </S.Container>
  );
};

export default withAuth(DashboardLayout);
