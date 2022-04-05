import React from "react";
import { GitHub } from "../icon/GitHub";
import { Velog } from "./../icon/Velog";

export const Footer = () => {
  const gitHover = () => {};

  return (
    <section className="bg-icon p-8 ">
      <div className="text-center ">
        <h1 className="text-3xl font-cafe font-bold pb-5">Contact</h1>
      </div>
      <div className="flex justify-center items-center font-cafeAir font-bold space-x-10">
        <h2 className="font-cafeAir">ybhag1005@gmail.com</h2>
      </div>
      <div className="space-x-5 text-center flex justify-center pt-7">
        <div className="flex justify-center flex-col">
          {/* <div className="bg-gray-400"> */}
          <a className="m-auto" href="https://github.com/Nanask" target="_blank">
            <GitHub />
          </a>
          {/* <p className="">Git Hub</p> */}
        </div>
        <div className="flex justify-center flex-col">
          <a className="m-auto" href="https://velog.io/@nana1005" target="_blank">
            <Velog />
          </a>
          {/* <p className="">Velog</p> */}
        </div>
      </div>
    </section>
  );
};
