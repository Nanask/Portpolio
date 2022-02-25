import React, { useCallback, useContext, useState, createContext } from "react";
import { light, dark } from "../theme/Theme";
import { ThemeProvider } from "styled-components";

const ThemeContext = createContext();

export const useThemecontext = () => {
  return useContext(ThemeContext);
};

const ModeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const themeObject = theme === "light" ? light : dark;

  // const styleDark = {
  //   backgroundColor: "#282c34",
  //   textColor: "white",
  // };

  // const styleLight = {
  //   backgroundColor: "white",
  //   textColor: "#282c34",
  // };

  const toggleTheme = useCallback(() => {
    if (theme === "light") {
      // styleDark();
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [theme]);

  console.log("toggleTheme", theme);
  console.log(themeObject);

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
