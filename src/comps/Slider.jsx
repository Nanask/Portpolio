import React, { useContext, useRef, useState } from "react";
import cat1 from "../img/cat1.jpg";
import cat2 from "../img/cat2.jpg";
import cat3 from "../img/cat3.jpg";
import dog from "../img/dog.png";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Slider = () => {
  const [images, setImages] = useState(0);
  const sliderRef = useRef();
  const [style, setStyle] = useState({
    transform: `translateX(-${images}00%)`,
    transition: `all 0.4s ease-in-out`,
  });

  const imgSlider = [
    {
      img: cat1,
    },
    {
      img: cat2,
    },
    {
      img: cat3,
    },
  ];

  const onRightClick = () => {
    if (images !== imgSlider.length) {
      setImages(images + 1);
      setStyle({
        transform: `translateX(-${images + 1}00%)`,
        transition: `all 0.4s ease-in-out`,
      });
      console.log("Rightstyle", style);
      console.log("Rightimages1", images);
    } else if (images == imgSlider.length) {
      setImages(1);
      console.log("Rightimages2", images);
    }

    // console.log("Rightimages", images);
    alert("right");
  };

  const onLeftClick = () => {
    // const listImg = imgSlider[length - 1];
    if (images !== 1) {
      setImages(images - 1);
      setStyle({
        transform: `translateX(-${images - 1}00%)`,
        transition: `all 0.4s ease-in-out`,
      });
      console.log("LeftImages1", images);
    } else if (images === 1) {
      setImages(imgSlider.length);
      console.log("LeftImages2", images);
    }
    console.log("LeftImages", images);

    alert("left");
  };

  //   const img = imgSlider.map((item, index) => {
  //     console.log(item.img[0]);
  //     return item;
  //   });

  //   console.log("imgslider", imgSlider);
  return (
    <div className="flex justify-center w-auto h-2/4">
      <div className="self-center pr-10 z-50 hover: cursor-pointer" onClick={onLeftClick}>
        <FontAwesomeIcon icon={faAngleLeft} size="3x" />
      </div>
      <div className="pt-10 flex justify-center overflow-hidden  " style={style}>
        {imgSlider.map((item, index) => {
          // console.log(index);
          return <img src={cat1} width="500px" height="300px" key={index} />;
        })}
      </div>
      {/* <div className="pt-10 flex justify-center" style={style}>
        <img src={cat1} width="500px" height="300px" />
        <img src={cat2} width="500px" height="300px" />
        <img src={cat3} width="500px" height="300px" />
      </div> */}
      <div className="self-center pl-10 hover: cursor-pointer" onClick={onRightClick}>
        <FontAwesomeIcon icon={faAngleRight} size="3x" />
      </div>
    </div>
  );
};
