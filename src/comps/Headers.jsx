import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../css/headers.css";
import { useThemecontext } from "../provider/ModeProvider";
import BasicSwitches from "./BasicSwitches";
import dog from "../img/dog.png";
import { styled } from "@mui/material/styles";

function Headers() {
  const { toggleTheme, themeObject } = useThemecontext();
  return (
    <section>
      <div class="App-header">
        <header className="flex items-center w-3/4 h-3/4 bg-gray-400 ">
          <div className="justify-center">
            <img src={dog} width="400" height="400" />
          </div>
          <div className="flex-1 text-left ml-48">
            <h1 className="my-2">Name: NANA</h1>
            <h1 className="my-2">Tel: 010-6329-6685</h1>
            <h1 className="my-2">Channel:</h1>
          </div>
        </header>
        <div>
          <div className="mt-10 align-bottom">
            <BasicSwitches styled={themeObject} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Headers;
