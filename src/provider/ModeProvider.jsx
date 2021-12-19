import React, { useCallback, useContext, useState } from "react";
import useDarkMode from "use-dark-mode";
import { ThemeProvier } from "styled-components";
import { createContext } from "react";

const ThemeContext = createContext();

export const useThemecontext = () => {
  return useContext(ThemeContext);
};

function ModeProvider({ Children }) {
  const [theme, setTheme] = useState("light");

  const propsStore = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={propsStore}>
      <ThemeProvier theme={themeObject}>{Children}</ThemeProvier>
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  const { theme, setTheme } = context;

  const toggleTheme = useCallback(() => {
    if (Theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [theme]);

  return [theme, setTheme];
}

export default ModeProvider({ ThemeProvier, useTheme });
