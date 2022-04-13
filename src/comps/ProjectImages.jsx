import React, { useState } from "react";
import portfolio from "../img/portfolio/portfolio.png";
import sport from "../img/sport/sport.png";
import todo from "../img/todo/todo.png";
import are from "../img/are/are.png";

export const ProjectImages = () => {
  const [img, setImg] = useState(
    [
      {
        id: 0,
        img: todo,
        img: todo,
        img: todo,
      },
    ],
    [
      {
        id: 1,
        img: are,
      },
    ],
    [
      {
        id: 2,
        img: sport,
      },
    ],
    [
      {
        id: 3,
        img: portfolio,
      },
    ]
  );
  const imageList = img.map((item, index) => {
    console.log("index", index);
    return <img src={item.img} data-id={index} />;
  });

  return <div>{imageList}</div>;
};
