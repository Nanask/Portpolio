import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import cat1 from "../img/cat1.jpg";
import cat2 from "../img/cat2.jpg";
import cat3 from "../img/cat3.jpg";

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

  const _imgSlider = [
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

  const [imgSlider, setImgSlider] = useState([
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
  ]);

  const EndSlider = () => {
    let tricEnd = [];
    return tricEnd.push(imgSlider[imgSlider.length]);
  };
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

  // useEffect(() => {
  //   const tricImg = imgSlider.filter((item, index) => {
  //     return index == item.length - 1;
  //   });
  //   console.log("tricImg", tricImg);
  // });

  const onRightClick = () => {
    const length = imgSlider.length;
    const lastImg = imgSlider.length - 1;

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

      // if (imageIndex >= lastImg) {
      //   setImgSlider([...imgSlider, ..._imgSlider]);
      //   setStyle({
      //     transform: `translateX(-${imageIndex + 1}00%)`,
      //     transition: `all 0.4s ease-in-out`,
      //   });

      // setImageIndex(0);

      // setTimeout(() => {
      //   setStyle({
      //     transform: `translateX(-${0}00%)`,
      //     transition: `0ms`,
      //   });
      // }, 500);
    }
    if (imageIndex >= lastImg) {
      console.log("마지막 이미지일때 imageIndex", imageIndex);
      // setImgSlider([...imgSlider, ..._imgSlider]);\
      // let index = 0;
      setImgSlider([...imgSlider, { EndSlider }]);

      // if (imgSlider.length + 1) {
      //   console.log("imageIndex === imgSlider.length", imageIndex, imgSlider.length);
      // }
      setImageIndex(0);
      // index++;
      // console.log("index", index);
      // console.log("imageIndex[lastImg]", imageIndex[index]);

      setTimeout(() => {
        setStyle({
          transform: `translateX(-${0}00%)`,
          transition: `0ms`,
        });
      }, 500);

      // if (imageIndex[lastImg]) {
      //   console.log("imageIndex === lastImg +1", lastImg + 1, imageIndex);
      // }

      // console.log("img")
      // if (imgSlider >= _imgSlider) {
      //   console.log("imgSlider, _imgSlider", imgSlider.length, _imgSlider.length);
      //   setImageIndex(0);
      //   setTimeout(() => {
      //     setStyle({
      //       transform: `translateX(-${0}00%)`,
      //       transition: `0ms`,
      //     });
      //   }, 500);
      // }

      // setImgSlider(imgSlider);
    }
    // if (length - 1 == lastImg) {
    //   console.log("imageIndex가 3일때", length - 1, lastImg);
    //   setImgSlider(imgSlider);
    // setImageIndex(0);
    // setTimeout(() => {
    //   setStyle({
    //     transform: `translateX(-${0}00%)`,
    //     transition: `0ms`,
    //   });
    // }, 500);
    // }
    // alert("right");
  };

  const onLeftClick = () => {
    const lastImg = imgSlider.length - 1;
    const length = imgSlider.length;
    //
    if (imageIndex !== 0) {
      setImageIndex(imageIndex - 1);

      setStyle({
        transform: `translateX(-${imageIndex - 1}00%)`,
        transition: `all 0.4s ease-in-out`,
      });
    }
    if (imageIndex === 0) {
      console.log("imageIndex 0일때", imageIndex);
      setImageIndex(lastImg);
      console.log("imageIndex가 마지막값일때", imageIndex);
      _imgSlider.unshift(_imgSlider[lastImg]);
      // const prevImages = imgSlider;
      // console.log(prevImages);

      // setImgSlider([
      //   ...imgSlider,
      //   ...prevImages.filter((img, index) => {
      //     return index !== length;
      //   }),
      // ]);

      setStyle({
        transform: `translateX(-${imageIndex}00%)`,
        transition: `0ms`,
      });
      setImgSlider(imgSlider);
    }

    // if (imageIndex === 0) {
    //   setImageIndex(length - 1);
    // }
  };

  // useEffect(() => {
  //   if (imageIndex === 0) {
  //     setImageIndex(imgSlider.length);
  //     setTimeout(function () {
  //       setStyle({
  //         transform: `translateX(-${imgSlider.length}00%)`,
  //         transition: `all 0.4s ease-in-out`,
  //       });
  //     }, 500);
  //   }
  //   if (imgSlider !== _imgSlider) {
  //     setImageIndex(0);
  //     console.log("imgIndex", imageIndex);
  //     setTimeout(() => {
  //       setStyle({
  //         transform: `translateX(-${0}00%)`,
  //         transition: `0ms`,
  //       });
  //     }, 500);
  //   }
  // }, [imageIndex, imgSlider.length]);

  // useEffect(() => {
  //   setStyle({
  //     transform: `translateX(-${1}00%)`,
  //     transition: `0ms`,
  //   });
  // }, [imgSlider]);

  //
  return (
    // <div className="w-4/5 h-auto">
    <div className="pt-10 px-10 flex justify-between items-center whitespace-nowrap">
      <div className=" z-50 hover: cursor-pointer" onClick={onLeftClick}>
        <FontAwesomeIcon icon={faAngleLeft} size="3x" />
      </div>
      <div className="w-96 h-96 relative overflow-hidden">
        <div className="pt-10 flex absolute object-cover max-h-full" style={style}>
          {imgSlider.map((item, index) => {
            return <img src={item.img} key={index} />;
          })}
        </div>
      </div>
      <div className="z-50 hover: cursor-pointer" onClick={onRightClick}>
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
