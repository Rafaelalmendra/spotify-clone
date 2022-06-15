import { createContext, ReactNode, useEffect, useState } from 'react';
import { auth, firebase } from '../services/firebase';

interface UserProps {
  id: string;
  name: string;
  avatar: string;
}

interface AuthContextProps {
  user: UserProps | undefined;
  setUser: (user: UserProps | undefined) => void;
  signInWithGoogle: () => Promise<void>;
}

interface AuthContextTypeProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider(props: AuthContextTypeProviderProps) {
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.');
        }

        localStorage.setItem(
          'user',
          JSON.stringify({
            id: uid,
            name: displayName,
            avatar: photoURL,
          })
        );
        const userString = localStorage.getItem('user');
        const userParsed = JSON.parse(userString as string);
        setUser(userParsed);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.');
      }

      localStorage.setItem(
        'user',
        JSON.stringify({
          id: uid,
          name: displayName,
          avatar: photoURL,
        })
      );
      const userString = localStorage.getItem('user');
      const userParsed = JSON.parse(userString as string);
      setUser(userParsed);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, signInWithGoogle }}>
      {props.children}
    </AuthContext.Provider>
  );
}
