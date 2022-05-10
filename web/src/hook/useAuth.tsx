import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth, firebase } from "../services/firebase";

type UserProviderProps = {
  children: ReactNode;
};
type UserContextType = {
  user: User | undefined;
  signWithGoogle: () => Promise<void>;
};

type User = {
  id: string;
  name: string;
  avatarURL: string;
};

export const UserContext = createContext({} as UserContextType);

function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { uid, displayName, photoURL } = user;

        if (!displayName || !photoURL) {
          throw new Error("Missing information from Google Account");
        }

        setUser({
          id: uid,
          name: displayName,
          avatarURL: photoURL,
        });
      }

      return () => unsubscribe();
    });
  }, []);

  async function signWithGoogle() {
    // Provider instace with Google
    const provider = new firebase.auth.GoogleAuthProvider();
    // Result popup authentication
    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { uid, displayName, photoURL } = result.user;

      if (!displayName || !photoURL) {
        throw new Error("Missing information from Google Account");
      }

      setUser({
        id: uid,
        name: displayName,
        avatarURL: photoURL,
      });
    }
  }

  return (
    <UserContext.Provider value={{ user, signWithGoogle }}>
      {children}
    </UserContext.Provider>
  );
}

function useAuth() {
  const context = useContext(UserContext);
  return context;
}

export { useAuth, UserProvider };
