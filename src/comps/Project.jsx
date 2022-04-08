import "aos/dist/aos.css";
import React from "react";
import "../css/project.css";
import { ProjectTheme } from "../theme/GlobalStyle";
import { modalStore } from "./Modal";

// alt + shift + o  import 지우는것 대박;

function Project() {
  const { flagModal, handleModal } = modalStore();

  return (
    <section className="project">
      <div className="text-center head_line p-8" data-aos="fade-up" data-aos-offset="200">
        <h1 className=" text-center text-3xl font-bold font-cafe head_line">PROJECTS</h1>
      </div>
      <div className="pb-20 flex justify-center m-auto lg:flex-nowrap md: flex-wrap  container " data-aos="fade-up" data-aos-easing="linear" data-aos-offset="200" data-aos-duration="500">
        <div className="py-6 px-10">
          <div className="text-center shadow-3xl hover:shadow-4xl cursor-pointer duration-200 bg-white inline-block px-3 pt-3 slider">
            <img onClick={handleModal} src={require("../img/dog.png").default} width="300px" height="300px" />
            <p className="py-3 text-xl">To Do List</p>
          </div>
        </div>
        <div className="py-6 px-10 ">
          <div className="text-center shadow-3xl hover:shadow-4xl cursor-pointer duration-200 bg-white inline-block px-3 pt-3 slider">
            <img onClick={handleModal} src={require("../img/dog.png").default} width="300px" height="300px" />
            <p className="py-3 text-xl">A_Re</p>
          </div>
        </div>
        <div className="py-6 px-10 ">
          <div className="text-center shadow-3xl hover:shadow-4xl cursor-pointer duration-200 bg-white inline-block px-3 pt-3 slider">
            <img onClick={handleModal} src={require("../img/dog.png").default} width="300px" height="300px" />
            <p className="py-3 text-xl">Sport</p>
          </div>
        </div>
        <div className="py-6 px-10 ">
          <div className="text-center shadow-3xl hover:shadow-4xl cursor-pointer duration-200 bg-white inline-block px-3 pt-3 slider">
            <img onClick={handleModal} src={require("../img/dog.png").default} width="300px" height="300px" />
            <p className="py-3 text-xl">Portfolio</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
