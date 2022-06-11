import withAuth from '../../hocs/withAuth';
import useAuth from '../../hooks/useAuth';
import * as S from '../../styles/pages/login/styles';

const Home = () => {
  const { user, setUser } = useAuth();

  const signOut = () => {
    setUser(undefined);
  };

  return (
    <S.Container>
      <h1>Home</h1>
      <button onClick={signOut}>Sign Out</button>
    </S.Container>
  );
};

export default withAuth(Home);
