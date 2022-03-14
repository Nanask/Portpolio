import React from "react";
import create from "zustand";
import { X_Icon } from "../icon/X_Icon";

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

  return (
    <div>
      {flagModal ? (
        <div className="w-full h-screen z-50 fixed flex justify-center items-center left-0 top-0 bg-opacity-70 bg-black overflow-hidden ">
          <div className="bg-white rounded md:w-1/2 h-4/6 border-2">
            <div className="hover: cursor-pointer" onClick={handleModal}>
              <X_Icon />
            </div>
            <div className="mt-10">
              <img class="img_1" src={require("../img/dog.png").default} width="300px" height="300px" />
            </div>
            <div className="mt-24 font-bold">
              <h1 className="text-3xl mb-5 font-regular">portfolio 내용작성</h1>
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
