import React, { useEffect, useState } from "react";
import { Css3 } from "../icon/Css3";
import { Html } from "../icon/Html";
import { Js } from "../icon/Js";
import { Mongo } from "../icon/Mongo";
import { Mysql } from "../icon/Mysql";
import { ReactIcon } from "../icon/ReactIcon";
import { Spring } from "../icon/Spring";
import { useThemecontext } from "./../provider/ModeProvider";

export const SkillContainer = () => {
  const { theme } = useThemecontext();
  const [color, setColor] = useState("black");

  useEffect(() => {
    return theme === "light" ? color : setColor("white");
  }, [color]);
  const iconColor = () => {
    return theme === "light" ? color : setColor("white");
  };

  console.log("theme", theme);

  console.log("iconColor", color);

  const skillItems = [
    {
      id: 1,
      icon: <Html color={iconColor} />,
      tag: "HTML5",
    },
    {
      id: 0,
      icon: <Css3 />,
      tag: "CSS3",
    },
    {
      id: 6,
      icon: <Js />,
      tag: "JavaScript",
    },
    {
      id: 2,
      icon: <ReactIcon />,
      tag: "React",
    },
    {
      id: 5,
      icon: <Spring />,
      tag: "Spring",
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
  ];

  const skillList = skillItems.map((itme, index) => {
    return (
      <li className="flex justify-center flex-col px-5 pb-5  ">
        <div className="m-auto px-4">{itme.icon}</div>
        <p className="py-3 text-center text-lg font-bold font-cafeAir">{itme.tag}</p>
      </li>
    );
  });

  return skillList;
};
