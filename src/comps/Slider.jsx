import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { modalStore, projectImg } from "./Modal";

export const Slider = () => {
  const { img } = projectImg();
  const { handleModal, imageId } = modalStore();
  const [imageIndex, setImageIndex] = useState(0);
  const [style, setStyle] = useState({
    transform: `translateX(${imageIndex}00%)`,
    transition: `all 0.4s ease-in-out`,
  });

  // console.log("imageId", imageId);

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

  // const imageStore = img[imageId.id].map((item, index) => {
  //   return <img src={item} key={index} height="100%" width="100%" />;
  // });

  return (
    <div className=" flex justify-center items-center">
      <div className="pr-5 hover: cursor-pointer icon">
        <FontAwesomeIcon icon={faAngleLeft} size="3x" />
      </div>
      <div className="w-img h-img relative overflow-hidden flex justify-center items-center ">
        <div className="flex bg-cover items-center " style={style}>
          {img[imageId.id].map((img, index) => {
            console.log("imageId 클릭", imageId.id);
            return <img className="border-2 border-gray-600 border-solid p-3" src={img} key={index} height="100%" width="100%" />;
          })}
        </div>
      </div>
      <div className="pl-5 hover: cursor-pointer icon">
        <FontAwesomeIcon icon={faAngleRight} size="3x" onClick={onRightClick} />
      </div>
    </div>
  );
};
