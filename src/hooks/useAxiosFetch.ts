import { useState, useEffect } from 'react';

//hooks
import useAuth from 'src/hooks/useAuth';

//services
import api from 'src/services/api';

const useAxiosFetch = (url: any) => {
  const { token } = useAuth();
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    api
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [token, url]);

  return { data, error, loading };
};

export default useAxiosFetch;
