import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider ({ children })  {
  const [authToken, setAuthToken] = useState({});
  const [getAuth, setGetAuth] = useState(0);
  console.log(authToken);
  
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('auth'));

    setAuthToken({ ...auth });
  }, [getAuth]);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken, getAuth, setGetAuth }}>
      {children}
    </AuthContext.Provider>
  );
}