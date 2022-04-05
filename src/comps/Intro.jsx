import "aos/dist/aos.css";
import React from "react";
import "../css/intro.css";
import { Calendar } from "../icon/Calendar";
import { GitHub } from "../icon/GitHub";
import { Human } from "../icon/Human";
import { Velog } from "../icon/Velog";
import { SkillContainer } from "./SkillContainer";

function Intro() {
  return (
    <section data-aos="fade-up ">
      <div className="py-10 text-center font-black">
        <h1 className="text-3xl font-bold font-cafe">ABOUT ME</h1>
      </div>
      <div className="flex font-cafeAir justify-center space-x-16 text-center pb-10 ">
        <div className="w-4/5" data-aos="fade-up" data-aos-easing="linear">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores hic nostrum possimus alias tenetur, temporibus numquam! Dolore asperiores quia nulla placeat quam qui laboriosam. Ipsa
            perspiciatis incidunt voluptatibus nulla.
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Intro;
