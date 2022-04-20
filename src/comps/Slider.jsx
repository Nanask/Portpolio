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

  const onRightClick = () => {
    const length = img[imageId.id].length;
    const lastImg = img[imageId.id].length - 1;
    // const firstImg = img[imageId.id][0];
    // const lastImage = img[imageId.id][lastImg];
    // console.log("first", firstImg);
    // console.log("lastImage", lastImage);

    // index값이 이미지 개수랑 일치하지 않는다면
    if (imageIndex !== length) {
      setImageIndex(imageIndex + 1);
      setStyle({
        transform: `translateX(-${imageIndex + 1}00%)`,
        transition: `all 0.4s ease-in-out`,
      });

      //index값이 이미지 개수와 일치하면
    }
    console.log("imageIndex", imageIndex);
    if (imageIndex >= lastImg) {
      console.log("마지막 이미지일때 imageIndex", imageIndex);
      setImageIndex(0);
      // img[imageId.id].map((img) => {
      //   console.log(img.length);
      //   console.log("img", img);
      // });
      // projectImg.setState({ ...img[imageId.id].push(img[imageId.id][lastImg]) });
      // projectImg.setState({ ...img[imageId.id].push(firstImg) });
      console.log("img", img);
      console.log("imageIndex 세팅", imageIndex);

      setTimeout(() => {
        setStyle({
          transform: `translateX(-${0}00%)`,
          transition: `0ms`,
        });
      }, 500);
      // projectImg.setState({ ...img[imageId.id].splice(lastImage) });
      // projectImg.setState({ ...img[imageId.id].splice(length, 1) });
      // projectImg.img[imageId.id].splice(lastImg, 1);
    }
  };

  const onLeftClick = () => {
    const length = img[imageId.id].length;
    const lastImg = img[imageId.id].length - 1;
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
      console.log("setImageIndex", imageIndex);
      setImageIndex(length - 1);
      console.log("imageIndex", imageIndex);
      // alert("imageIndex", imageIndex);
      setTimeout(() => {
        setStyle({
          transform: `translateX(-${lastImg}00%)`,
          transition: `0ms`,
        });
      }, 500);
      // console.log("index 값이 0일때 style", style);
      // console.log("index 값이 0일때", imageIndex);
    }
  };

  return (
    <div className="flex justify-center items-center max-h md:w-full">
      <div className="max-w-full overflow-hidden flex justify-center relative group">
        <div className="flex items-center w-img container" style={style}>
          <div className="flex w-img max-h-128">
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
