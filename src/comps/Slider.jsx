import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import cat1 from "../img/cat1.jpg";
import cat2 from "../img/cat2.jpg";
import cat3 from "../img/cat3.jpg";
import pf_1 from "../img/portfolio/pf_1.png";
import pf_2 from "../img/portfolio/pf_2.png";
import pf_3 from "../img/portfolio/pf_3.png";
import { ProjectImages } from "./ProjectImages";
import portfolio from "../img/portfolio/portfolio.png";
import sport from "../img/sport/sport.png";
import todo from "../img/todo/todo.png";
import are from "../img/are/are.png";
import { modalStore, projectImg } from "./Modal";
import { styled } from "@mui/material/styles";
import { ListItem } from "@mui/material";

export const Slider = () => {
  const { img } = projectImg();
  const { handleModal } = modalStore();
  const [imageIndex, setImageIndex] = useState(0);
  const [style, setStyle] = useState({
    transform: `translateX(${imageIndex}00%)`,
    transition: `all 0.4s ease-in-out`,
  });

  console.log("img", img);

  const image = img.filter((item, e, index) => {
    // console.log("dataset", e.target.dataset);
    console.log("item.id", item.id);
    console.log("dddd");
  });

  // handleModal = (e, id) => {
  //   // const id = e.target.dataset;
  //   console.log("id", id);
  // };
  const onRightClick = () => {
    const length = img.length;
    const lastImg = img.length - 1;

    //
    // index값이 이미지 개수랑 일치하지 않는다면
    if (imageIndex !== length) {
      setImageIndex(imageIndex + 1);

      if (imageIndex >= length?.length - 1) {
        console.log("index가 이미지 개수보다 많을 때");
      }
      setStyle({
        transform: `translateX(-${imageIndex + 1}00%)`,
        transition: `all 0.4s ease-in-out`,
      });

      //index값이 이미지 개수와 일치하면
    }
    // if (imageIndex >= lastImg) {
    //   console.log("마지막 이미지일때 imageIndex", imageIndex);
    //   setImg([...img]);

    //   // if (imgSlider.length + 1) {
    //   //   console.log("imageIndex === imgSlider.length", imageIndex, imgSlider.length);
    //   // }
    //   setImageIndex(0);

    //   setTimeout(() => {
    //     setStyle({
    //       transform: `translateX(-${0}00%)`,
    //       transition: `0ms`,
    //     });
    //   }, 500);
    // }
  };

  // handleModal = (e) => {
  //   // const data = e.target.getAttribute("data-id");
  //   // console.log(data);
  //   console.log("ddd");
  // };

  return (
    <div className="py-5 px-10 flex justify-center items-center  ">
      <div className="pr-3 hover: cursor-pointer icon">
        <FontAwesomeIcon icon={faAngleLeft} size="3x" />
      </div>
      <div className="w-img h-img relative overflow-hidden flex justify-center items-center ">
        <div className="flex bg-cover max-w-full max-h-full items-center" style={style}>
          {img.map((item, index) => {
            // console.log("target", e.target.dataset);
            console.log("index", index);
            return <img src={item.img} key={index} height="100%" width="100%" />;
          })}
          {/* {image} */}
          {/* <ProjectImages /> */}
        </div>
      </div>
      <div className="pl-3 hover: cursor-pointer icon">
        <FontAwesomeIcon icon={faAngleRight} size="3x" onClick={onRightClick} />
      </div>
    </div>
  );
};
