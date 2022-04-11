import React, { useEffect } from "react";
import "../css/headers.css";
import { useThemecontext } from "../provider/ModeProvider";
import BasicSwitches from "./BasicSwitches";
import { styled } from "@mui/material/styles";
import { TextTyping } from "./TextTyping";
import { Typing, TypingStep } from "typing-effect-reactjs";
import Typewriter from "typewriter-effect";
import background from "../img/backImg.png";
import { MainIcon } from "./../icon/MainIcon";
import { Nav } from "./Nav";

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

  const style = {
    backgroundImage: `url(${background})`,
  };

  return (
    <section className=" min-h-screen bg-cover header font-cafeAir font-bold relative ">
      <div className=" flex flex-col justify-center w-full text-center">
        <Nav />
        <div className="text-center m-auto items-center max-w-md max-h-screen icon">
          <MainIcon />
        </div>
        <div className="text-5xl ">
          <TypingStep sequence={sequence} element="h1" typeSpeed="150" cursorColor="white" blinkingSpeed="600" />
        </div>
        <div className="px-10 pb-10 pt-24 align-bottom">
          <BasicSwitches />
        </div>
      </div>
    </section>
  );
}

export default Headers;
