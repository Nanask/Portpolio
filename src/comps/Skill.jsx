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

function Skill() {
  return (
    <section className="mb-30" data-aos="fade-right">
      <div className="my-14 text-center">
        <h1 className="text-2xl font-bold">SKILLS</h1>
      </div>
      <div className="mb-7">
        <ul className="flex justify-center w-50 space-x-20 ">
          <div className="bg-icon flex justify-center flex-col pt-3 pl-3 pb-2 pr-3 rounded-md">
            <div className="m-auto px-4 ">
              <Css3 />
            </div>
            <p className="mt-3 text-center text-sm font-bold  ">CSS 3</p>
          </div>
          <div className="bg-icon flex justify-center flex-col pt-3 pl-3 pb-2 pr-3 rounded-md overflow-hidden">
            <div className="m-auto px-4 ">
              <Html />
            </div>
            <p className="mt-3 text-center text-sm font-bold ">HTML 5</p>
          </div>
          <div className="bg-icon flex justify-center flex-col pt-3 pl-3 pb-2 pr-3 rounded-md">
            <div className="m-auto px-4 ">
              <ReactIcon />
            </div>
            <p className="mt-3 text-center text-sm font-bold ">React</p>
          </div>
          <div className="bg-icon flex justify-center flex-col pt-3 pl-3 pb-2 pr-3 rounded-md">
            <div className="m-auto px-4 ">
              <Mysql />
            </div>
            <p className="mt-3 text-center text-sm font-bold ">MySql</p>
          </div>
          <div className="bg-icon flex justify-center flex-col pt-3 pl-3 pb-2 pr-3 rounded-md">
            <div className="m-auto px-4 ">
              <Mongo />
            </div>
            <p className="mt-3 text-center text-sm font-bold ">MongoDB</p>
          </div>
          <div className="bg-icon flex justify-center flex-col pt-3 pl-3 pb-2 pr-3 rounded-md">
            <div>
              <div className="m-auto px-4 ">
                <Spring className="m-auto" />
              </div>
              <p className="mt-3 text-center text-sm font-bold ">Spring</p>
            </div>
          </div>
          <div className="bg-icon flex justify-center flex-col pt-3 pl-3 pb-2 pr-3 rounded-md">
            <div>
              <div className="m-auto px-4 ">
                <Js className="m-auto" />
              </div>
              <p className="mt-3 text-center text-sm font-bold ">JavaScript</p>
            </div>
          </div>
        </ul>
      </div>
    </section>
  );
}

export default Skill;
