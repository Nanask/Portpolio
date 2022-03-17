import React, { useEffect } from "react";
import "../css/headers.css";
import { useThemecontext } from "../provider/ModeProvider";
import BasicSwitches from "./BasicSwitches";
import { styled } from "@mui/material/styles";
import { TextTyping } from "./TextTyping";
import { Typing, TypingStep } from "typing-effect-reactjs";
import Typewriter from "typewriter-effect";

function Headers() {
  const { toggleTheme, themeObject } = useThemecontext();

  const sequence = [
    {
      content: "안녕하세요 \n \n프론트엔드 개발자 나나입니다.",
    },
    {
      content: 500, // 100ms delay
    },
    {
      content: 200, // 200ms delay
    },
  ];

  return (
    <section className="bg-[#e9d5a1] font-black">
      <div class="App-header">
        <header className="">
          <div className="text-5xl">
            <TypingStep sequence={sequence} element="h1" typeSpeed="150" cursorColor="white" blinkingSpeed="600" />
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
