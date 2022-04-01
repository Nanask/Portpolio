import React from "react";
import { Css3 } from "../icon/Css3";
import { Html } from "../icon/Html";
import { Js } from "../icon/Js";
import { Mongo } from "../icon/Mongo";
import { Mysql } from "../icon/Mysql";
import { ReactIcon } from "../icon/ReactIcon";
import { Spring } from "../icon/Spring";

export const SkillContainer = () => {
  const skillItems = [
    {
      id: 0,
      icon: <Css3 />,
      tag: "CSS 3",
    },
    {
      id: 1,
      icon: <Html />,
      tag: "HTML 5",
    },
    {
      id: 2,
      icon: <ReactIcon />,
      tag: "React",
    },
    {
      id: 3,
      icon: <Mysql />,
      tag: "MySql",
    },
    {
      id: 4,
      icon: <Mongo />,
      tag: "MongoDB",
    },
    {
      id: 5,
      icon: <Spring />,
      tag: "Spring",
    },
    {
      id: 6,
      icon: <Js />,
      tag: "JavaScript",
    },
  ];

  const skillList = skillItems.map((itme, index) => {
    return (
      //   <ul className="flex justify-center space-x-10 items-center flex-wrap" key={itme.id}>
      <li className="flex justify-center flex-col ">
        <div className="m-auto px-4">{itme.icon}</div>
        <p className="py-3 text-center text-lg font-bold">{itme.tag}</p>
      </li>
      //   </ul>
    );
  });

  return skillList;
};
