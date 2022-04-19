import "aos/dist/aos.css";
import React from "react";
import "../css/intro.css";

export const Intro = () => {
  return (
    <section className="intro" data-aos="fade-up intro">
      <div className="py-10  text-center font-black head_line">
        <h1 className="text-3xl font-bold font-cafe">ABOUT ME</h1>
      </div>
      <div className="flex font-cafeAir justify-center space-x-16 text-center pb-10 ">
        <div className="w-4/5" data-aos="fade-up" data-aos-easing="linear">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores hic nostrum possimus alias tenetur, temporibus numquam! Dolore asperiores quia nulla placeat quam qui laboriosam. Ipsa
            perspiciatis incidunt voluptatibus nulla.
          </p>
        </div>
      </div>
    </section>
  );
};
