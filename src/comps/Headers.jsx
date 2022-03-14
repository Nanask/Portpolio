import React, { useEffect } from "react";
import "../css/headers.css";
import { useThemecontext } from "../provider/ModeProvider";
import BasicSwitches from "./BasicSwitches";
import { styled } from "@mui/material/styles";

function Headers() {
  const { toggleTheme, themeObject } = useThemecontext();

  const content = "안녕하세요 , \n 프론트엔드 개발자를 꿈꾸는 나나입니다.";
  const text = document.querySelector(".text");
  let i = 0;

  const typing = () => {
    let txt = content[i++];
  };

  // function typing() {
  //   let txt = content[i++];
  //   text.innerHTML += txt === "\n" ? "<br/>" : txt;
  //   if (i > content.length) {
  //     text.textContent = "";
  //     i = 0;
  //   }
  // }
  // setInterval(typing, 200);

  return (
    <section className="bg-[#e9d5a1] font-black">
      <div class="App-header">
        <header className="">
          <div class="text_box">
            <h1 className="text-4xl p-12">안녕하세요</h1>
            <h1 className="text-5xl">프론트엔드 개발자를 꿈꾸는 나나입니다.</h1>
          </div>
        </header>
        <div className="pt-24">
          <div className="p-10 align-bottom">
            <BasicSwitches styled={themeObject} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Headers;
