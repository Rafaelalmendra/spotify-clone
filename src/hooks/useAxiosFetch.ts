import { useState, useEffect } from 'react';

//hooks
import useAuth from 'src/hooks/useAuth';

//services
import api from 'src/services/api';

const useAxiosFetch = (url: string, setParams?: number) => {
  const { token } = useAuth();
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  const fetchData = (url: string, setParams?: number) => {
    api
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        params: {
          limit: setParams,
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
    fetchData(url, setParams);
  }, [url, setParams]);

  return { data, error, loading };
};

export default useAxiosFetch;
