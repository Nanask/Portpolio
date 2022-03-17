import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import create from "zustand";
import { X_Icon } from "../icon/X_Icon";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import cat1 from "../img/cat1.jpg";
import cat2 from "../img/cat2.jpg";
import cat3 from "../img/cat3.jpg";
import dog from "../img/dog.png";

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
  // const { isModal, onCloseModal } = useModalContext();

  const { flagModal, handleModal } = modalStore();

  const image = () => {
    const img = [dog, cat1, cat2, cat3];
    console.log("img", img);
    for (let i; i < img.length; i++) {
      console.log("i", img[i]);
    }
    return;
  };

  const onLeftClick = () => {
    image();
    alert("left");
  };

  const onRightClick = () => {
    alert("right");
  };

  return (
    <div>
      {flagModal ? (
        <div className="w-full h-screen z-50 fixed flex justify-center items-center left-0 top-0 bg-opacity-70 bg-black overflow-hidden ">
          <div className="bg-white flex justify-center flex-col  rounded md:w-1/2 h-5/6 border-2 ">
            <div className="ml-auto mb-auto hover: cursor-pointer font-bold" onClick={handleModal}>
              <X_Icon />
            </div>
            <div className="pt-10 flex justify-center transition">
              <div className="self-center pr-10 hover: cursor-pointer" onClick={onLeftClick}>
                <FontAwesomeIcon icon={faAngleLeft} size="3x" />
              </div>
              <img class="img_1" src={require("../img/dog.png").default} width="500px" height="300px" />
              <div className="self-center pl-10 hover: cursor-pointer" onClick={onRightClick}>
                <FontAwesomeIcon icon={faAngleRight} size="3x" />
              </div>
            </div>
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
