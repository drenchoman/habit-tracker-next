import React from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import firebase_app from '../firebase/config';
import { MoonLoader } from 'react-spinners';

const auth = getAuth(firebase_app);

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? (
        <div className="flex min-h-screen flex-col items-center justify-center  p-8">
          <MoonLoader />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
