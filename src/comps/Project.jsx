import "aos/dist/aos.css";
import React from "react";
import "../css/project.css";
import { modalStore } from "./Modal";
import portfolio from "../img/portfolio/portfolio.png";
import sport from "../img/sport/sport.png";
import todo from "../img/todo/todo.png";
import are from "../img/are/are.png";

// alt + shift + o  import 지우는것 대박;

function Project() {
  const { handleModal } = modalStore();

  return (
    <section className="project">
      <div className="text-center head_line p-8" data-aos="fade-up" data-aos-offset="200">
        <h1 className=" text-center text-3xl font-bold font-cafe head_line">PROJECTS</h1>
      </div>
      <div className="flex pb-20 justify-center m-auto lg:flex-nowrap md: flex-wrap container " data-aos="fade-up" data-aos-easing="linear" data-aos-offset="200" data-aos-duration="500">
        <div className="px-5 py-5">
          <div className="rounded-md text-center shadow-3xl hover:shadow-4xl hover:scale-105 transform-gpu cursor-pointer duration-300 px-3 pt-3 slider">
            <img onClick={handleModal} src={todo} width="100%" height="100%" />
            <p className="py-3 text-xl">To Do List</p>
          </div>
        </div>
        <div className="px-5 py-5">
          <div className="rounded-md text-center shadow-3xl hover:shadow-4xl hover:scale-105 transform-gpu cursor-pointer duration-300 px-3 pt-3 slider">
            <img onClick={handleModal} src={are} width="100%" height="100%" />
            <p className="py-3 text-xl">A_Re</p>
          </div>
        </div>
        <div className="px-5 py-5">
          <div className="rounded-md text-center shadow-3xl hover:shadow-4xl hover:scale-105 transform-gpu cursor-pointer duration-300 px-3 pt-3 slider">
            <img onClick={handleModal} src={sport} width="100%" height="100%" />
            <p className="py-3 text-xl">Sport</p>
          </div>
        </div>
        <div className="px-5 py-5">
          <div className="rounded-md text-center shadow-3xl hover:shadow-4xl hover:scale-105 transform-gpu cursor-pointer duration-300 px-3 pt-3 slider">
            <img onClick={handleModal} src={portfolio} width="100%" height="100%" />
            <p className="py-3 text-xl">Portfolio</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
