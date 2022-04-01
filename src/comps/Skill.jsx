import "aos/dist/aos.css";
import React from "react";
import { SkillContainer } from "./SkillContainer";

function Skill() {
  return (
    <section className="pt-30 font-regular " data-aos="fade-up">
      <div className="py-7 text-center">
        <h1 className="text-3xl font-bold">SKILLS</h1>
      </div>
      <div className="py-7 container m-auto" data-aos="fade-up" data-aos-easing="linear">
        <ul className="flex justify-center space-x-10 items-center md: flex-wrap">
          <SkillContainer />
        </ul>
      </div>
    </section>
  );
}

export default Skill;
