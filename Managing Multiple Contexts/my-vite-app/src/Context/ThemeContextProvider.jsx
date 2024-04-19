import { createContext, useState } from "react";

let themeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export { ThemeContextProvider, themeContext };
