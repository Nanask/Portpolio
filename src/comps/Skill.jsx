import "aos/dist/aos.css";
import React from "react";
import "../css/skill.css";
import { Css3 } from "../icon/Css3";
import { Js } from "../icon/Js";
import { ReactIcon } from "../icon/ReactIcon";
import { Html } from "./../icon/Html";
import { Mongo } from "./../icon/Mongo";
import { Mysql } from "./../icon/Mysql";
import { Spring } from "./../icon/Spring";

//data-aos="fade-up" data-aos-easing="linear"
function Skill() {
  return (
    <section className="pt-30 font-regular" data-aos="fade-up">
      <div className="py-7 text-center">
        <h1 className="text-3xl font-bold">SKILLS</h1>
      </div>
      <div className="py-7 container m-auto ">
        <div className="flex justify-center space-x-10 items-center flex-wrap  ">
          <div className="flex justify-center flex-col ">
            <div className="m-auto px-4 ">
              <Css3 />
            </div>
            <p className="py-3 text-center text-lg font-bold">CSS 3</p>
          </div>
          <div className=" flex justify-center flex-col">
            <div className="m-auto px-4">
              <Html />
            </div>
            <p className="py-3 text-center text-lg font-bold ">HTML 5</p>
          </div>
          <div className=" flex justify-center flex-col">
            <div className="m-auto px-4 ">
              <ReactIcon />
            </div>
            <p className="py-3 text-center text-lg font-bold ">React</p>
          </div>
          <div className=" flex justify-center flex-col">
            <div className="m-auto px-4 ">
              <Mysql />
            </div>
            <p className="py-3 text-center text-lg font-bold ">MySql</p>
          </div>
          <div className=" flex justify-center flex-col">
            <div className="m-auto px-4 ">
              <Mongo />
            </div>
            <p className="py-3 text-center text-lg font-bold ">MongoDB</p>
          </div>
          <div className=" flex justify-center flex-col">
            <div className="m-auto px-4 ">
              <Spring />
            </div>
            <p className="py-3 text-center text-lg font-bold ">Spring</p>
          </div>
          <div className=" flex justify-center flex-col">
            <div className="m-auto px-4 ">
              <Js />
            </div>
            <p className="py-3 text-center text-lg font-bold ">JavaScript</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
