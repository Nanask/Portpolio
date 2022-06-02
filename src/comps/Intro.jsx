import "aos/dist/aos.css";
import React from "react";
import poto from "../img/poto.jpg";

//
export const Intro = () => {
  return (
    <section className="intro" data-aos="fade-up " data-aos-offset="200">
      <div className="py-14 text-center font-black head_line">
        <h1 className="text-3xl font-bold font-cafe">ABOUT ME</h1>
      </div>
      <div
        className="flex font-cafeAir justify-evenly items-center text-center pb-20 lg:flex-nowrap md: flex-wrap space-y-4"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-offset="200"
        data-aos-duration="500"
      >
        <div className="flex border-4 border-gray-300 border-solid  shadow-md w-80 h-72 rounded-full">
          <img className=" rounded-full w-96 " src={poto} alt="my_poto" />
        </div>
        <div className="w-500 text-xl flex items-center justify-center flex-col">
          <div className="flex flex-col">
            <p>(주) 한국경영원 인재개발원 수료</p>
          </div>
          <div>
            <br />
            <p className="font-bold">다양한 프레임워크나 언어들에 대해 관심이 있습니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
