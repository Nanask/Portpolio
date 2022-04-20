import "aos/dist/aos.css";
import React from "react";
import dog from "../img/dog.png";

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
        <div className="max-w-md flex border-2  border-gray-500 border-solid rounded-md shadow-md ">
          <img className="" src={dog} width="100%" alt="my_poto" height="100%" />
        </div>
        <div className="w-400 text-xl flex items-center justify-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Aliquid adipisci vel quia minima. Dolorum cumque amet laborum autem veritatis expedita totam optio ducimus esse minus,
            <br /> explicabo at quod quo laboriosam.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
          </p>
        </div>
      </div>
    </section>
  );
};
