import "aos/dist/aos.css";
import React from "react";
import { modalStore } from "./Modal";
import portfolio from "../img/portfolio/portfolio.png";
import day from "../img/3days/day.png";
import todo from "../img/todo/todo.png";
import are from "../img/are/are.png";

function Project() {
  const { handleModal } = modalStore();

  const projectStore = [
    {
      id: 0,
      image: todo,
      title: "To Do List",
    },
    {
      id: 1,
      image: are,
      title: "A_Re",
    },
    {
      id: 2,
      image: day,
      title: "작심3일",
    },
    {
      id: 3,
      image: portfolio,
      title: "Portfolio",
    },
  ];

  const project = projectStore.map((item) => {
    return (
      <div className="px-5 py-5 " key={item.id}>
        <div className="w-96 h-full rounded-md text-center shadow-3xl hover:shadow-4xl hover:scale-105 transform-gpu cursor-pointer duration-300 slider">
          <img data-id={item.id} onClick={handleModal} alt="project" src={item.image} width="100%" height="100%" />
          <p className="py-3 text-xl font-cafeAir font-bold">{item.title}</p>
        </div>
      </div>
    );
  });

  return (
    <section className="project">
      <div className="text-center head_line p-14" data-aos="fade-up" data-aos-offset="200">
        <h1 className=" text-center text-3xl font-bold font-cafe head_line">PROJECTS</h1>
      </div>
      <div className="flex pb-20 justify-around m-auto flex-wrap container w-4/6  " data-aos="fade-up" data-aos-easing="linear" data-aos-offset="200" data-aos-duration="500">
        {project}
      </div>
    </section>
  );
}

export default Project;
