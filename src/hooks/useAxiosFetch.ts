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
    setloading(true);

    api
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        params: {
          limit: setParams,
          ids: '3o3iEw0ojOwBNBhSQhPQCW,4Jsg7lNWjy7Sa0xI3Endax,4lSITHJE87mw0PC6iLXuIK,61K9p2WHGrWG0Jx6gieNON,42fmQlLrWsFpKzEA9VFV27,73LR1lN3Ugi2dGedrf8egE,35QBHJc5uKzCnHquxiJlT5,3gQl3lsitYfw3ovL0zy9Lw',
          market: 'US',
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
