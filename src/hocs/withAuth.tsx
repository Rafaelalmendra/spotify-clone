//hooks
import useAuth from 'src/hooks/useAuth';

//pages
import Login from 'src/pages/login';

const withAuth = (Component: any) => {
  return (props: any) => {
    const { token } = useAuth();

    if (token) {
      return <Component {...props} />;
    } else {
      return <Login />;
    }
  };
};

export default withAuth;
