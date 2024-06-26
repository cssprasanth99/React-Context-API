import { createContext, useState } from "react";

let authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <authContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </authContext.Provider>
  );
};

export { AuthContextProvider, authContext };
