import withAuth from '../../../hocs/withAuth';
import SideBar from '../../SideBar';

import * as S from './styles';

interface DashboardLaoyoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLaoyoutProps) => {
  return (
    <S.Container>
      <SideBar />
      <S.Layout>{children}</S.Layout>
    </S.Container>
  );
};

export default withAuth(DashboardLayout);
