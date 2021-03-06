import React, { createContext, useCallback, useContext, useLayoutEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { dark, light } from "../theme/Theme";

const ThemeContext = createContext();

export const useThemecontext = () => {
  return useContext(ThemeContext);
};

const ModeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useLayoutEffect(() => {
    const setMode = () => {
      theme === "light" ? window.localStorage.setItem("theme", "light") : window.localStorage.setItem("theme", "dark");
    };
    setMode();
    const localTheme = window.localStorage.getItem("theme");
    // console.log("localTheme", localTheme);
    if (localTheme !== null) {
      if (localTheme === "dark") {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
    // console.log("theme", theme);
  }, [theme]);

  const themeObject = theme === "light" ? light : dark;

  const toggleTheme = useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [theme]);

  // theme === "light" ? setTheme("dark") : setTheme("light");

  // console.log("toggleTheme", theme);
  // console.log(themeObject);

  const propsStore = {
    toggleTheme,
    themeObject,
    theme,
  };

  return (
    <ThemeContext.Provider value={propsStore}>
      <ThemeProvider theme={themeObject}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

// const useTheme = () => {
//   const context = useContext(ThemeContext);
//   const { theme, setTheme } = context;

//   const toggleTheme = useCallback(() => {
//     if (theme === "light") {
//       setTheme("dark");
//     } else {
//       setTheme("light");
//     }
//   }, [theme]);

//   return [theme, toggleTheme];
// };

export default ModeProvider;
