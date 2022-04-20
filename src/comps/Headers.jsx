import React from "react";
import { TypingStep } from "typing-effect-reactjs";
import { MainImage } from "./../icon/MainImage";
import BasicSwitches from "./BasicSwitches";
import { Nav } from "./Nav";

function Headers() {
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

  const HUMAN_TYPING_SPEED = 150;
  const BLINKIN_SPEED = 600;

  return (
    <section className=" min-h-screen flex bg-cover header font-cafeAir font-bold relative  ">
      <div className=" flex flex-col justify-center w-full text-center ">
        <Nav />
        <div className="text-center m-auto max-w-lg max-h-screen icon">
          <MainImage />
        </div>
        <div className="text-5xl ">
          <TypingStep sequence={sequence} element="h1" typeSpeed={HUMAN_TYPING_SPEED} cursorColor="white" blinkingSpeed={BLINKIN_SPEED} />
        </div>
        <div className="px-10 pt-24 pb-10  align-bottom">
          <BasicSwitches />
        </div>
      </div>
    </section>
  );
}

export default Headers;
