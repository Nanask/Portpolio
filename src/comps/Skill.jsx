import { Icon } from "@iconify/react";
import React from "react";
import "../css/skill.css";
// import { ReactComponent as Css3 } from "../src/css3.svg";

function Skill() {
  return (
    <section>
      <div className="my-14 text-center">
        <h1 className="text-2xl font-bold">SKILLS</h1>
      </div>
      <div className="mb-30">
        <ul className="flex justify-center">
          <li className="list-item mx-5">
            <span className=" ">
              <div className="bg-gray-100 w-30 h-35 p-4">
                <Icon icon="simple-icons:css3" width="39px" height="39px" textAnchor="middle" />
                {/* <Css3 /> */}
                <p className="mt-3">CSS 3</p>
              </div>
            </span>
          </li>
          <li className="list-item mx-5">
            <span>
              <div className="bg-gray-100 w-30 p-4 ">
                <Icon icon="ion:logo-html5" textAlign="center" width="39px" height="39px" />
                <p className="mt-3">HTML 5</p>
              </div>
            </span>
          </li>
          <li className="list-item mx-5">
            <span>
              <div className="bg-gray-100 w-30 p-4">
                <Icon icon="fa-brands:react" textAlign="center" width="39px" height="39px" />
                <p className="mt-3">REACT</p>
              </div>
            </span>
          </li>
          <li className="list-item mx-5">
            <span>
              <div className="bg-gray-100 p-2">
                <Icon icon="fontisto:mysql" width="39px" height="39px" />
                <p className="mt-3">MySql</p>
              </div>
            </span>
          </li>
          <li className="list-item mx-5">
            <span>
              <div className="bg-gray-100 p-2 text-center">
                <Icon icon="simple-icons:mongodb" width="39px" height="39px" style={{ textAlign: "center" }} />
                <p className="mt-3">MongoDB</p>
              </div>
            </span>
          </li>
          <li className="list-item mx-5">
            <span>
              <div className="bg-gray-100 p-2">
                <Icon icon="simple-icons:spring" width="39px" height="39px" />
                <p className="mt-3">Spring</p>
              </div>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skill;
