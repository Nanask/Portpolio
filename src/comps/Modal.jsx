import React, { useState } from "react";
import { X_Icon } from "../icon/X_Icon";
import dog from "../img/dog.png";
import { useModalContext } from "../provider/ModalProvider";
import { useThemecontext } from "./../provider/ModeProvider";

export const Modal = () => {
  const { isModal, onCloseModal } = useModalContext();

  return (
    <div>
      {!isModal ? (
        <div className="w-full h-screen z-50 fixed flex justify-center items-center left-0 top-0 bg-opacity-70 bg-black overflow-hidden ">
          <div className="bg-white rounded md:w-1/2 h-4/6 border-2">
            <button className="flex justify-end" onClick={onCloseModal}>
              <X_Icon />
            </button>
            <div className="mt-10">
              <img class="img_1" src={dog} width="300px" height="300px" />
            </div>
            <div className="mt-24">
              <h1 className="text-3xl mb-5">portfolio 내용작성</h1>
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
