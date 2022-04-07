import "aos/dist/aos.css";
import React from "react";
import { SkillContainer } from "./SkillContainer";

function Skill() {
  return (
    <section className="skill pt-30 font-regular " data-aos="fade-up" data-aos-offset="100" data-aos-duration="500">
      <div className=" py-7 text-center head_line">
        <h1 className="text-3xl font-bold font-cafe">SKILLS</h1>
      </div>
      <div className="py-7 container m-auto flex justify-center" data-aos="fade-up" data-aos-easing="linear" data-aos-offset="100" data-aos-duration="500">
        <ul className="flex justify-center  items-center lg:w-full md: flex-wrap md: w-img">
          <SkillContainer />
        </ul>
      </div>
    </section>
  );
}

export default Skill;
