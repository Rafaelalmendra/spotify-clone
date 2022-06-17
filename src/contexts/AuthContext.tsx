import { createContext, ReactNode, useEffect, useState } from 'react';

interface AuthContextProps {
  token: string | null;
  setToken: any;
  logout: () => void;
}

interface AuthContextTypeProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider(props: AuthContextTypeProviderProps) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash: any = window.location.hash;
    let token: any = window.localStorage.getItem('token');

    if (hash) {
      token = hash.substring(1).split('&')[0].split('=')[1];

      window.location.hash = '';
      window.localStorage.setItem('token', token);
      setToken(token);
    }
  }, []);

  const logout = () => {
    setToken(null);
    window.localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ token, setToken, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}
