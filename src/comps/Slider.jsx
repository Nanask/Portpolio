import React, { useContext, useRef, useState } from "react";
import cat1 from "../img/cat1.jpg";
import cat2 from "../img/cat2.jpg";
import cat3 from "../img/cat3.jpg";
import dog from "../img/dog.png";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Slider = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [style, setStyle] = useState({
    transform: `translateX(-${imageIndex}00%)`,
    transition: `all 0.4s ease-in-out`,
  });

  const imgSlider = [
    {
      img: cat2,
    },
    {
      img: cat3,
    },
    {
      img: cat1,
    },
  ];

  const onRightClick = () => {
    const lastImg = imgSlider.length - 1;

    console.log("마지막 이미지 번호", lastImg);

    // index값이 이미지 개수랑 일치하지 않는다면
    if (imageIndex !== imgSlider.length) {
      setImageIndex(imageIndex + 1);
      setStyle({
        transform: `translateX(${imageIndex + 1}00%)`,
        transition: `all 0.4s ease-in-out`,
      });
      console.log("Rightimages1", imageIndex);
      //index값이 이미지 개수와 일치하면
    } else if (imageIndex === imgSlider.length) {
      setImageIndex(0);
    }
    alert("right");
  };

  const onLeftClick = () => {
    const lastImg = imgSlider.length - 1;
    console.log("마지막 이미지 번호", lastImg);
    if (imageIndex !== 0) {
      setImageIndex(imageIndex - 1);
      setStyle({
        transform: `translateX(-${imageIndex - 1}00%)`,
        transition: `all 0.4s ease-in-out`,
      });
      console.log("LeftImages1", imageIndex);
    } else if (imageIndex === 0) {
      setImageIndex(lastImg);
      console.log("LeftImages2", imageIndex);
    }
    console.log("LeftImages", imageIndex);

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
      <div className="pt-10 flex justify-center overflow-hidden  ">
        {imgSlider.map((item, index) => {
          // console.log(index);
          return <img src={item.img} width="500px" height="300px" key={index} />;
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
