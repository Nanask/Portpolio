import React from "react";
import "../css/headers.css";
import BasicSwitches from "./BasicSwitches";

function Headers() {
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
