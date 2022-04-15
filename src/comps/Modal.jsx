import React, { useEffect, useState } from "react";
import create from "zustand";
import { X_Icon } from "../icon/X_Icon";
import { Slider } from "./Slider";
import portfolio from "../img/portfolio/portfolio.png";
import sport from "../img/sport/sport.png";
import todo from "../img/todo/todo.png";
import are from "../img/are/are.png";
export const modalStore = create((set) => ({
  // state
  flagModal: false,
  imageId: null,
  // inputValue: "",

  handleModal(e) {
    // const { img } = projectImg();
    const id = e.target.dataset;
    console.log("e.target", id);
    set((state) => ({
      flagModal: !state.flagModal,
      imageId: id,
    }));
  },
}));

export const projectImg = create((set) => ({
  img: [
    [todo, todo, todo],
    [are, are, are],
    [sport, sport, sport],
    [portfolio, portfolio, portfolio],
  ],
}));

export const Modal = () => {
  const { flagModal, handleModal } = modalStore();

  const setModal = modalStore((state) => !state.flagModal);
  console.log("setModal", setModal);
  // const { img } = projectImg();

  useEffect(() => {
    if (flagModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  });

  // 클래스네임중에서 특정 이름이 포함된 클래스가 있으면 modal을 닫아라!
  const outSlidermodal = (e) => {
    const { className } = e.target;
    const xIcon = e.target.className.baseVal;
    console.log("xIcon", xIcon);
    // const modal = className.includes("modal_box");
    // console.log("modal", modal);
    // if (modal || xIcon) {
    console.log("className", className);
    // modalStore.setState({ flagModal: false });
    // handleModal();
    // }
  };

  return (
    <div>
      {flagModal ? (
        <div className="w-full h-screen z-50 fixed flex justify-center items-center left-0 top-0 bg-opacity-70 bg-black overflow-hidden modal_box">
          <div
            // onClick={(e) => {
            //   e.stopPropagation();
            // }}
            className="bg-white flex justify-center flex-col rounded md:w-1/2 h-5/6 slider"
          >
            <div className="ml-auto hover: cursor-pointer font-bold icon  md: px-5 py-4 modal_box" onClick={handleModal}>
              <X_Icon />
            </div>
            <Slider />
            <div className="py-14 font-bold">
              <h2 className="text-3xl text-center mb-5 font-regular">portfolio 내용작성</h2>
              <p className="text-center">
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
