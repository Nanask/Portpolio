import React, { useCallback, useContext, useState, createContext } from "react";
import { light, dark } from "../comps/Theme";
import { ThemeProvider } from "styled-components";

const ThemeContext = createContext();

export const useThemecontext = () => {
  return useContext(ThemeContext);
};

const ModeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const themeObject = theme === "light" ? light : dark;

  const toggleTheme = useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [theme]);

  const propsStore = {
    toggleTheme,
    themeObject,
  };

  return (
    <ThemeContext.Provider value={propsStore}>
      <ThemeProvider theme={themeObject}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ModeProvider;
