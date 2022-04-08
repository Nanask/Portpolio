import React, { useEffect, useState } from "react";
import create from "zustand";
import { X_Icon } from "../icon/X_Icon";
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

export const Modal = () => {
  const { flagModal, handleModal } = modalStore();

  useEffect(() => {
    if (flagModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  });

  return (
    <div>
      {flagModal ? (
        <div onClick={handleModal} className=" w-full h-screen z-50 fixed flex justify-center items-center left-0 top-0 bg-opacity-70 bg-black overflow-hidden  ">
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="bg-white flex justify-center flex-col rounded md:w-1/2 h-5/6  border-2 slider "
          >
            <div className="ml-auto pt-10 px-5 hover: cursor-pointer font-bold icon" onClick={handleModal}>
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
