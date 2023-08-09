import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider ({ children })  {
  const [authToken, setAuthToken] = useState({});
  const [getAuth, setGetAuth] = useState(0);
  console.log(authToken);
  
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('authToken'));
    const userName = JSON.parse(localStorage.getItem('authName'));

    setAuthToken({ token, userName });
  }, [getAuth]);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken, getAuth, setGetAuth }}>
      {children}
    </AuthContext.Provider>
  );
}