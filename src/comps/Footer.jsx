import React from "react";
import { gitHubIcon } from "../icon/iconList";
import { velogIcon } from "../icon/iconList";

export const Footer = () => {
  return (
    <section className=" p-8 footer">
      <div className="text-center head_line">
        <h1 className="text-3xl font-cafe font-bold pb-5">Contact</h1>
      </div>
      <div className="flex justify-center items-center font-cafeAir font-bold space-x-10">
        <h2 className="font-cafeAir">ybhag1005@gmail.com</h2>
      </div>
      <div className="space-x-5 text-center flex justify-center pt-7">
        <div className="flex justify-center flex-col">
          <a className="m-auto icon hover:scale-125 transform-gpu duration-200" href="https://github.com/Nanask" target="blank">
            {gitHubIcon.icon()}
          </a>
        </div>
        <div className="flex justify-center flex-col">
          <a className="m-auto icon hover:scale-125 transform-gpu duration-200" href="https://velog.io/@nana1005" target="blank">
            {velogIcon.icon()}
          </a>
        </div>
      </div>
    </section>
  );
};
