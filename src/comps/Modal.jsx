import React, { useEffect } from "react";
import create from "zustand";
import { Slider } from "./Slider";
import portfolio1 from "../img/portfolio/portfolio.png";
import portfolio2 from "../img/portfolio/pf_1.png";
import portfolio3 from "../img/portfolio/pf_2.png";
import portfolio4 from "../img/portfolio/pf_3.png";
import day from "../img/3days/day.png";
import day1 from "../img/3days/days1.png";
import day2 from "../img/3days/days2.png";
import day3 from "../img/3days/days3.png";
import todo1 from "../img/todo/todo1.png";
import todo2 from "../img/todo/todo2.png";
import todo3 from "../img/todo/todo3.png";
import are from "../img/are/are.png";
import are1 from "../img/are/are1.png";
import are2 from "../img/are/are2.png";
import are3 from "../img/are/are3.png";
import are4 from "../img/are/are4.png";
import are5 from "../img/are/are5.png";
import are6 from "../img/are/are6.png";
import { gitHubIcon } from "../icon/iconList";
import { CloseIcon } from "../icon/CloseIcon";

export const modalStore = create((set) => ({
  // state
  flagModal: false,
  imageId: null,
  // inputValue: "",

  handleModal(e) {
    const id = e.target.dataset;
    set((state) => ({
      flagModal: !state.flagModal,
      imageId: id,
    }));
  },
}));

export const projectImg = create((set) => ({
  img: [
    [todo1, todo2, todo3],
    [are, are1, are2, are3, are4, are5, are6],
    [day, day1, day2, day3],
    [portfolio1, portfolio2, portfolio3, portfolio4],
  ],
  modalText: [
    [
      {
        id: 0,
        title: "TodoList",
        intro: "할일을 기록하고 완료한 일을 표시하거나 지울 수 있습니다.",
        about: "프로젝트 기획 및 디자인, 구현",
        skill: "React, HTML, CSS3, Google Cloud",
        href: "https://github.com/Nanask/todo_list",
      },
    ],
    [
      {
        id: 1,
        title: "A_Re",
        intro: "재활용이 가능한 리사이클 & 업사이클 공방을 모아 보여주는 사이트입니다.",
        about: "로그인,로그아웃",
        skill: "React, HTML, CSS3, Google Cloud",
        href: "https://github.com/Team-NanaScript/Art_Recycle",
      },
    ],
    [
      {
        id: 2,
        title: "작심3일",
        intro: "최소 3일동안 달성할 일을 기록하고, 다른 사람들과 할 일을 공유하는 어플입니다.",
        about: "프로젝트 기획 및 디자인, 구현",
        skill: "Firebase, Android Studio",
        href: "https://github.com/Team-NanaScript/Now_3Days",
      },
    ],
    [
      {
        id: 3,
        title: "portfolio",
        intro: "만들었던 프로젝트들을 모아 보여주는 사이트 입니다.",
        about: "프로젝트 기획 및 디자인, 구현",
        skill: "HTML, CSS3, JavaScript, React",
        href: "https://github.com/Nanask/Portpolio",
      },
    ],
  ],
}));

export const Modal = () => {
  const { flagModal, handleModal, imageId } = modalStore();
  const { modalText } = projectImg();

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
        <div onClick={handleModal} className="w-full h-screen z-50 fixed flex justify-center items-center left-0 top-0 bg-opacity-70 bg-black overflow-hidden modal_box">
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="bg-white flex justify-center flex-col rounded md:w-1/2 px-3 slider container"
          >
            <div className="flex justify-end hover: cursor-pointer font-bold py-2 icon modal_box" onClick={handleModal}>
              <CloseIcon />
            </div>
            <Slider />
            {modalText[imageId.id].map((item) => {
              return (
                <div className="flex items-center flex-col pt-3" key={item.id}>
                  <div className="flex justify-center py-2 pt-5 ">
                    <h2 className="text-center font-cafeAir font-bold text-lg">{item.intro}</h2>
                  </div>
                  <div className="flex justify-center space-x-2 py-2">
                    <div className="font-cafeAir font-bold label">맡은 부분</div>
                    <p className="text-center font-cafeAir">{item.about}</p>
                  </div>
                  <div className="flex justify-center  space-x-2 py-2">
                    <div className="font-cafeAir font-bold label">Skill</div>
                    <p className="text-center font-cafeAir">{item.skill}</p>
                  </div>
                  <div className="flex justify-center  space-x-2 py-2">
                    <a className="m-auto icon hover:scale-125 transform-gpu duration-200" href={item.href} target="blank">
                      {gitHubIcon.icon()}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
