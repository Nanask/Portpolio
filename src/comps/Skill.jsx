import React from "react";
import { iconList } from "../icon/iconList";

function Skill() {
  return (
    <section className="skill pt-30 font-regular " data-aos="fade-up" data-aos-offset="200" data-aos-duration="500">
      <div className="p-14 text-center head_line">
        <h1 className="text-3xl font-bold font-cafe">SKILLS</h1>
      </div>
      <div className=" container m-auto flex justify-center">
        <ul className="flex justify-center pb-20 items-center lg:w-full md: flex-wrap md: w-img" data-aos="fade-up" data-aos-easing="linear" data-aos-offset="500" data-aos-duration="500">
          {iconList.map(({ icon, name, id }) => {
            return (
              <li className="flex justify-center flex-col px-5 pb-5" key={id}>
                <div className="m-auto px-4 skills">{icon()}</div>
                <p className="py-3 text-center text-lg font-bold font-cafeAir icon_name">{name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Skill;
