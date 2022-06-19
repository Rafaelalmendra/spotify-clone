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

  const client_id = import.meta.env.VITE_APP_CLIENT_ID;
  const redirect_uri = 'http://localhost:3000/home';
  const api_uri = 'https://accounts.spotify.com/authorize';
  const scope = [
    'user-read-private',
    'user-read-email',
    'user-modify-playback-state',
    'user-read-playback-state',
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-top-read',
  ];

  const handleLogin = () => {
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      ' '
    )}&response_type=token&show_dialog=true`;
  };

  return (
    <AuthContext.Provider value={{ token, setToken, handleLogin }}>
      {props.children}
    </AuthContext.Provider>
  );
}
