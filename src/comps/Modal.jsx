import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import create from "zustand";
import { X_Icon } from "../icon/X_Icon";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import cat1 from "../img/cat1.jpg";
import cat2 from "../img/cat2.jpg";
import cat3 from "../img/cat3.jpg";
import dog from "../img/dog.png";
import { Slider } from "./Slider";

export const modalStore = create((set) => ({
  // state
  flagModal: false,
  // inputValue: "",

  handleModal() {
    set((state) => ({
      flagModal: !state.flagModal,
    }));
  },

  // onChange(e) {
  //   set(() => ({
  //     inputValue: e.target.value,
  //   }));
  // },
}));

// export const imgStore = create((set) => ({
//   // state
//   img: {dog, cat1, cat2, cat3},

//   handleImg() {
//     set((state) => ({
//       img: !state.img,
//     }));
//   },
// }));

export const Modal = () => {
  const { flagModal, handleModal } = modalStore();

  // const onLeftClick = () => {
  //   // const length = image.length;
  //   // console.log("length", length);
  //   // const _img = image.map((item) => {
  //   //   console.log("img", item[0]);
  //   // });
  //   alert("left");
  // };

  // const onRightClick = () => {
  //   alert("right");
  // };

  return (
    <div>
      {flagModal ? (
        <div className="w-full h-screen z-50 fixed flex justify-center items-center left-0 top-0 bg-opacity-70 bg-black overflow-hidden ">
          <div className="bg-white flex justify-center flex-col  rounded md:w-1/2 h-5/6 border-2 ">
            <div className="ml-auto mb-auto hover: cursor-pointer font-bold" onClick={handleModal}>
              <X_Icon />
            </div>
            <Slider />
            <div className="py-20  font-bold">
              <h1 className="text-3xl text-center mb-5 font-regular">portfolio 내용작성</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, voluptate dolore et exercitationem consequuntur est voluptatibus quo suscipit cupiditate ducimus explicabo animi fuga
                consequatur praesentium nulla, incidunt tempore a iure!
              </p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
