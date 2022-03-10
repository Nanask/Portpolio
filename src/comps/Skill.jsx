import { Icon } from "@iconify/react";
import React from "react";
import "../css/skill.css";
import { Css3 } from "../icon/Css3";
import { Html } from "./../icon/Html";
import { Mongo } from "./../icon/Mongo";
import { Mysql } from "./../icon/Mysql";
import { ReactIcon } from "../icon/ReactIcon";
import { Spring } from "./../icon/Spring";

function Skill() {
  return (
    <section>
      <div className="my-14 text-center">
        <h1 className="text-2xl font-bold">SKILLS</h1>
      </div>
      <div className="mb-30">
        <ul className="flex justify-center w-50 space-x-20 bg-slate-600">
          <div className="bg-gray-100 flex justify-center flex-col px-10 py-5">
            <div className="m-auto px-4">
              <Css3 />
            </div>
            <p className="mt-3 text-center font-bold">CSS 3</p>
          </div>
          <div className="bg-gray-100 flex justify-center flex-col px-10 py-5">
            <div className="m-auto px-4">
              <Html />
            </div>
            <p className="mt-3 text-center font-bold">HTML 5</p>
          </div>
          <div className="bg-gray-100 flex justify-center flex-col px-10 py-5">
            <div className="m-auto px-4">
              <ReactIcon />
            </div>
            <p className="mt-3 text-center font-bold">React</p>
          </div>
          <div className="bg-gray-100 flex justify-center flex-col px-10 py-5">
            <div className="m-auto px-4">
              <Mysql />
            </div>
            <p className="mt-3 text-center font-bold">MySql</p>
          </div>
          <div className="bg-gray-100 flex justify-center flex-col px-10 py-5">
            <div className="m-auto px-4">
              <Mongo />
            </div>
            <p className="mt-3 text-center font-bold">MongoDB</p>
          </div>
          <div className="bg-gray-100 flex justify-center flex-col px-10 py-5">
            <div>
              <div className="m-auto px-4">
                <Spring className="m-auto" />
              </div>
              <p className="mt-3 text-center font-bold">Spring</p>
            </div>
          </div>
        </ul>
      </div>
    </section>
  );
}

export default Skill;
