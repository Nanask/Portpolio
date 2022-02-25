import React from "react";
import "../css/headers.css";
import { useThemecontext } from "../provider/ModeProvider";
import BasicSwitches from "./BasicSwitches";

function Headers() {
  const { toggleTheme, themeObject } = useThemecontext();
  return (
    <header class="App-header">
      <h1>NANA's page</h1>
      <div class="swich">
        <BasicSwitches />
      </div>
    </header>
  );
}

export default Headers;
