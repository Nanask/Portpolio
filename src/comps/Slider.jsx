import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { modalStore, projectImg } from "./Modal";

export const Slider = () => {
  const { img } = projectImg();
  const { imageId } = modalStore();
  const [imageIndex, setImageIndex] = useState(0);
  const [style, setStyle] = useState({
    transform: `translateX(${imageIndex}00%)`,
    transition: `all 0.4s ease-in-out`,
  });
  const length = img[imageId.id].length;
  const lastImg = img[imageId.id].length - 1;

  const onRightClick = () => {
    // index값이 이미지 개수랑 일치하지 않는다면
    if (imageIndex !== length) {
      setImageIndex(imageIndex + 1);
      setStyle({
        transform: `translateX(-${imageIndex + 1}00%)`,
        transition: `all 0.4s ease-in-out`,
      });

      //index값이 이미지 개수와 일치하면
    }
    if (imageIndex >= lastImg) {
      console.log("마지막 이미지일때 imageIndex", imageIndex);
      setImageIndex(0);
      console.log("img", img);
      console.log("imageIndex 세팅", imageIndex);

      setTimeout(() => {
        setStyle({
          transform: `translateX(-${0}00%)`,
          transition: `0ms`,
        });
      }, 500);
    }
  };

  const onLeftClick = () => {
    // const length = img[imageId.id].length;
    // const lastImg = img[imageId.id].length - 1;
    if (imageIndex !== 0) {
      setImageIndex(imageIndex - 1);
      setStyle({
        transform: `translateX(-${imageIndex - 1}00%)`,
        transition: `all 0.4s ease-in-out`,
      });
    }
    if (imageIndex === 0) {
      setImageIndex(length - 1);
      setTimeout(() => {
        setStyle({
          transform: `translateX(-${lastImg}00%)`,
          transition: `0ms`,
        });
      }, 500);
    }
  };

  return (
    <div className="flex justify-center items-center max-h md:w-full">
      <div className="max-w-full overflow-hidden flex justify-center relative group">
        <div className="flex items-center container" style={style}>
          <div className="flex max-w-max max-h-128">
            {img[imageId.id].map((img, index) => {
              return <img className="border-2 border-gray-300 border-solid p-3 group-hover:opacity-100 " alt="project" src={img} key={index} width="100%" height="100%" />;
            })}
          </div>
        </div>
        <div>
          <div className="pl-5 hover: cursor-pointer absolute top-2/4 left-0 group-hover:opacity-100 transition-opacity opacity-0 ">
            <FontAwesomeIcon icon={faAngleLeft} size="4x" onClick={onLeftClick} />
          </div>
          <div className="pr-5 hover: cursor-pointer absolute top-2/4 right-0 group-hover:opacity-100 transition-opacity opacity-0">
            <FontAwesomeIcon icon={faAngleRight} size="4x" onClick={onRightClick} />
          </div>
        </div>
      </div>
    </div>
  );
};
