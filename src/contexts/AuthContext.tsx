import { createContext, ReactNode, useEffect, useState } from 'react';

interface AuthContextProps {
  token: string;
  setToken: (token: string) => void;
  handleLogin: () => void;
}

interface AuthContextTypeProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider(props: AuthContextTypeProviderProps) {
  const [token, setToken] = useState('');

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const accessToken = hash.substring(1).split('&')[0].split('=')[1];

      localStorage.setItem('access_token', accessToken);
      setToken(accessToken as string);
    }
  }, [token]);

  const CLIENT_ID = import.meta.env.VITE_APP_CLIENT_ID;
  const REDIRECT_URI = 'http://localhost:3000/home';
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';

  const handleLogin = () => {
    window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&show_dialog=true`;
  };

  return (
    <AuthContext.Provider value={{ token, setToken, handleLogin }}>
      {props.children}
    </AuthContext.Provider>
  );
}
