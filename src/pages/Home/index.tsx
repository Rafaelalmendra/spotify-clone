import DashboardLayout from '../../components/Layouts/Dashboard';
import useAuth from '../../hooks/useAuth';

//styles
import * as S from '../../styles/pages/login/styles';

const Home = () => {
  const { user, setUser } = useAuth();
  const signOut = () => {
    setUser(undefined);
  };

  return <DashboardLayout></DashboardLayout>;
};

export default Home;
