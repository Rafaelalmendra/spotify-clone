import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//hooks
import useAuth from 'src/hooks/useAuth';

const withAuth = (Component: any) => {
  return (props: any) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [verified, setVerified] = useState(false);

    useEffect(() => {
      if (!user) {
        navigate('/');
      } else {
        setVerified(true);
        navigate('/Home');
      }
    }, [user]);

    if (verified) {
      return <Component {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;
