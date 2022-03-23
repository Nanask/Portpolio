import React, { useContext, useRef, useState } from "react";
import cat1 from "../img/cat1.jpg";
import cat2 from "../img/cat2.jpg";
import cat3 from "../img/cat3.jpg";
import dog from "../img/dog.png";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Slider = () => {
  const [img, setImg] = useState([
    {
      img: cat2,
    },
    {
      img: cat3,
    },
    {
      img: cat1,
    },
  ]);
  const [imageIndex, setImageIndex] = useState(0);
  const [style, setStyle] = useState({
    // backgroundImg: `url(${imgSlider.url})`,
    // display:`none`,
    transform: `translateX(${imageIndex}00%)`,
    transition: `all 0.4s ease-in-out`,
  });

  const imgSlider = [
    {
      id: 1,
      img: cat1,
    },
    {
      id: 2,
      img: cat2,
    },
    {
      id: 3,
      img: cat3,
    },
  ];
  // const imgSlider = [
  //   {
  //     id: 1,
  //     url: "../Img/cat1.jpg",
  //   },
  //   {
  //     id: 2,
  //     url: "../Img/cat2.jpg",
  //   },
  //   {
  //     id: 3,
  //     url: "../Img/cat3.jpg",
  //   },
  // ];

  const onRightClick = () => {
    const length = imgSlider.length;
    const lastImg = imgSlider.length - 1;
    console.log("lastImg", lastImg);
    // console.log("이미지개수", length);
    // index값이 이미지 개수랑 일치하지 않는다면
    if (imageIndex !== length) {
      setImageIndex(imageIndex + 1);
      // console.log("img의 index", imageIndex);
      setStyle({
        transform: `translateX(-${imageIndex + 1}00%)`,
        transition: `all 0.4s ease-in-out`,
      });
      console.log("index 값이 0일때 style", style);
      console.log("Rightimages1", imageIndex);
      //index값이 이미지 개수와 일치하면
    }
    if (imageIndex >= lastImg) {
      console.log("이미지 같을때 index", imageIndex);
      setImageIndex(0);
      setStyle({
        transform: `translateX(-${0}00%)`,
        transition: `0ms `,
      });
      // setTimeout(() => {
      //   setStyle({
      //     transform: `translateX(-${0}00%)`,
      //     transition: `0ms`,
      //   });
      // }, 500);
    }
    // alert("right");
  };

  const onLeftClick = () => {
    const lastImg = imgSlider.length - 1;
    const length = imgSlider.length;
    // console.log("마지막 이미지 번호", lastImg);
    if (imageIndex !== 0) {
      setImageIndex(imageIndex - 1);
      console.log("index 값이 0이 아닐때", imageIndex);

      setStyle({
        transform: `translateX(-${imageIndex - 1}00%)`,
        transition: `all 0.4s ease-in-out`,
      });
    }
    if (imageIndex === 0) {
      // alert("여기는 0일때");
      setImageIndex(length - 1);
      // alert("imageIndex", imageIndex);
      setStyle({
        transform: `translateX(-${lastImg}00%)`,
        transition: `0ms`,
      });
      console.log("index 값이 0일때 style", style);
      console.log("index 값이 0일때", imageIndex);
    }

    // alert("left");
  };

  //   const img = imgSlider.map((item, index) => {
  //     console.log(item.img[0]);
  //     return item;
  //   });

  //   console.log("imgslider", imgSlider);
  return (
    // <div className="w-4/5 h-auto">
    <div className="pt-10 flex justify-between items-center whitespace-nowrap">
      <div className="pr-10 ml-2 z-50 hover: cursor-pointer" onClick={onLeftClick}>
        <FontAwesomeIcon icon={faAngleLeft} size="3x" />
      </div>
      {/* <div className=" w-full "> */}
      <div className=" w-full h-96 relative overflow-hidden max-w-xl ">
        <div className="pt-10 flex absolute object-cover text-center max-h-full" style={style}>
          {/* <img src={cat1} width="1000px" height="300px" />
            <img src={cat2} width="500px" height="300px" />
            <img src={cat3} width="500px" height="300px" />
          </div> */}
          {imgSlider.map((item, index) => {
            // console.log(index);
            // return (
            //   <div className="flex">
            //     <p className="bg-gradient-to-t"></p>
            //   </div>
            // );
            return <img src={item.img} key={item.id} width="100%" height="100%" />;
          })}
        </div>
        {/* </div> */}
      </div>
      <div className="self-center mr-2 pl-10 z-50 hover: cursor-pointer" onClick={onRightClick}>
        <FontAwesomeIcon icon={faAngleRight} size="3x" />
      </div>
      {/* <div className="pt-10 flex justify-center" style={style}>
    //   <img src={cat1} width="500px" height="300px" />
    //   <img src={cat2} width="500px" height="300px" />
    //   <img src={cat3} width="500px" height="300px" />
    // </div> */}
    </div>
  );
};
