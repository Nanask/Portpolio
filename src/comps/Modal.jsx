import React, { useEffect, useState } from "react";
import create from "zustand";
import { X_Icon } from "../icon/X_Icon";
import { Slider } from "./Slider";
import portfolio from "../img/portfolio/portfolio.png";
import sport from "../img/sport/sport.png";
import todo from "../img/todo/todo.png";
import are from "../img/are/are.png";
import { GitHub } from "../icon/GitHub";
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
    [todo, todo, todo],
    [are, are, are],
    [sport, sport, sport],
    [portfolio, portfolio, portfolio],
  ],
  modalText: [
    [
      {
        title: "TodoList",
        intro: "할일을 기록하고 완료한 일을 표시하거나 지울 수 있습니다.",
        about: "프로젝트 기획 및 디자인, 구현",
        skill: "React, HTML, CSS3, Google Cloud",
        href: "https://github.com/Nanask",
      },
    ],
    [
      {
        title: "A_Re",
        intro: "할일을 기록하고 완료한 일을 표시하거나 지울 수 있습니다.",
        about: "로그인,로그아웃",
        skill: "React, HTML, CSS3, Google Cloud",
        href: "https://github.com/Nanask",
      },
    ],
    [
      {
        title: "Sport",
        intro: "광주의 공공체육시설들을 보여주는 사이트 입니다.",
        about: "문의사항 게시판",
        skill: "React, Spring Framework, MyBatis, MySQL, HTML, CSS3",
        href: "https://github.com/Nanask",
      },
    ],
    [
      {
        title: "portfolio",
        intro: "제가 만들었던 프로젝트들을 모아 보여주는 사이트 입니다.",
        about: "프로젝트 기획 및 디자인, 구현",
        skill: "HTML, CSS3, JavaScript, React",
        href: "https://github.com/Nanask",
      },
    ],
  ],
}));

export const Modal = () => {
  const { flagModal, handleModal, imageId } = modalStore();
  const { modalText } = projectImg();
  // console.log("intro", intro);
  console.log("modalText", modalText);

  // title: { todo: "TodoList", are: "A_Re", sport: "sport", portfolio: "portfolio" },
  // intro: {
  //   todo: "할일을 기록하고 완료한 일을 표시하거나 지울 수 있습니다.",
  //   are: "국내 재활용 공방을 보여주는 사이트 입니다.",
  //   sport: "광주의 공공체육시설들을 보여주는 사이트 입니다.",
  //   portfolio: "제가 만들었던 프로젝트들을 모아 보여주는 사이트 입니다.",
  // },
  // about: {
  //   todo: "프로젝트 기획 및 디자인, 구현",
  //   are: "로그인,로그아웃",
  //   sport: "문의사항 게시판",
  //   portfolio: "프로젝트 기획 및 디자인, 구현",
  // },
  // skill: {
  //   todo: "React, HTML, CSS3, Google Cloud",
  //   are: "MongoDB, React, NodeJs, HTML, CSS3",
  //   sport: "React, Spring Framework, MyBatis, MySQL, HTML, CSS3",
  //   portfolio: "HTML, CSS3, JavaScript, React",
  // },

  // const ModalText = [
  //   {
  //     title: "TodoList",
  //     intro: "할일을 기록하고 완료한 일을 표시하거나 지울 수 있습니다.",
  //     about: "프로젝트 기획 및 디자인, 구현",
  //     skill: "React, HTML, CSS3, Google Cloud",
  //   },
  //   {
  //     title: "are",
  //     intro: "할일을 기록하고 완료한 일을 표시하거나 지울 수 있습니다.",
  //     about: "프로젝트 기획 및 디자인, 구현",
  //     skill: "React, HTML, CSS3, Google Cloud",
  //   },
  // ];

  // const modalContent = ModalText.map((item, index) => {
  //   // if (imageId === index) {
  //   console.log("index", index);
  //   console.log("item", item);
  //   // console.log("이거나와?");
  //   console.log("imageid", imageId);
  //   console.log("modalText", item.title[0]);
  //   // if (imageId == item) {
  //   return (
  //     <div className="py-4 font-bold">
  //       <h2 className="text-3xl text-center font-regular pb-3">{item.title}</h2>
  //       <p className="text-center font-cafeAir">{item.intro}</p>
  //       <p className="text-center font-cafeAir">{item.about}</p>
  //       <p className="text-center font-cafeAir">{item.skill}</p>
  //     </div>
  //   );
  //   // }
  // });

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
            className="bg-white flex justify-center flex-col rounded md:w-1/2  slider"
          >
            <div className="flex justify-end hover: cursor-pointer font-bold icon md: px-5 py-4 modal_box" onClick={handleModal}>
              <X_Icon />
            </div>
            <Slider />
            {modalText[imageId.id].map((item, index) => {
              return (
                <div className="">
                  <h2 className="text-3xl text-center items-center font-cafe p-5">{item.title}</h2>
                  <div className="flex items-center flex-col">
                    <div className="flex justify-center p-3 space-x-2">
                      {/* <div className="font-cafe">기능</div> */}
                      <p className="text-center font-cafeAir">{item.intro}</p>
                    </div>
                    <div className="flex justify-center p-3 space-x-2">
                      <div className="font-cafe">맡은 부분</div>
                      <p className="text-center font-cafeAir">{item.about}</p>
                    </div>
                    <div className="flex justify-center p-3 space-x-2">
                      <div className="font-cafe">Skill</div>
                      <p className="text-center font-cafeAir">{item.skill}</p>
                    </div>
                    <div className="flex justify-center p-3 space-x-2">
                      <a className="m-auto icon hover:scale-125 transform-gpu duration-200" href={item.href} target="_blank">
                        <GitHub />
                      </a>
                    </div>
                    {/* <p className="text-center font-cafeAir">{item.skill}</p> */}
                    {/* <span className="font-cafe bg-gray-500">
                      기능
                      <p className="text-center font-cafeAir">{item.intro}</p>
                    </span>
                    <div className="font-cafe">
                      맡은 부분
                      <p className="text-center font-cafeAir">{item.about}</p>
                    </div>
                    <div className="font-cafe">
                      skill
                      <p className="text-center font-cafeAir">{item.skill}</p>
                    </div> */}
                  </div>
                </div>
              );
            })}
            {/* <div className="py-4 font-bold">
              <h2 className="text-3xl text-center font-regular pb-3">portfolio 내용작성</h2>
              <p className="text-center font-cafeAir">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, voluptate dolore et exercitationem consequuntur est voluptatibus quo suscipit cupiditate ducimus explicabo animi fuga
                consequatur praesentium nulla, incidunt tempore a iure!
              </p>
            </div> */}
            {/* {modalContent} */}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
