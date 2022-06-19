import axios from 'axios';
import { useState, useEffect } from 'react';

//hooks
import useAuth from 'src/hooks/useAuth';

//services
import api from 'src/services/api';

const useAxiosFetch = (url: any) => {
  const { token } = useAuth();
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    axios
      .get('https://api.spotify.com/v1/me/playlists', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        const { items } = res.data;
        setData(items);
      });
  }, [token]);

  return { data };
};

export default useAxiosFetch;
