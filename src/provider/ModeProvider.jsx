import React, { useCallback, useContext, useState } from "react";
import useDarkMode from "use-dark-mode";
import { createContext } from "react";

const ThemeContext = createContext();

export const useThemecontext = () => {
  return useContext(ThemeContext);
};

const ModeProvider = ({ Children }) => {
  const [theme, setTheme] = useState("light");

  function useTheme() {
    const context = useContext(ThemeContext);
    const { theme, setTheme } = context;

    const toggleTheme = useCallback(() => {
      if (theme === "light") {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }, [theme]);

    return [theme, setTheme];
  }

  const propsStore = {
    theme,
    setTheme,
  };

  return <ThemeContext.Provider value={propsStore}>{Children}</ThemeContext.Provider>;
};

export default ModeProvider;
