import DashboardLayout from '../../components/Layouts/Dashboard';
import useAuth from '../../hooks/useAuth';

//styles
import * as S from '../../styles/pages/home/styles';

const Home = () => {
  const { user, setUser } = useAuth();
  const signOut = () => {
    setUser(undefined);
  };

  return (
    <DashboardLayout>
      <S.Container></S.Container>
    </DashboardLayout>
  );
};

export default Home;
