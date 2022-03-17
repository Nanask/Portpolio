import "aos/dist/aos.css";
import React from "react";
import "../css/project.css";
import { modalStore } from "./Modal";

// alt + shift + o  import 지우는것 대박;

function Project() {
  const { flagModal, handleModal } = modalStore();

  return (
    <section className="bg-bg-basic ">
      <div className="text-center p-8" data-aos="fade-up">
        <div className=" text-white text-center text-2xl font-bold">PROJECTS</div>
      </div>
      <div className="pb-24 flex justify-center">
        <div className="flex justify-center" data-aos="fade-up" data-aos-easing="linear">
          <div className="space-x-9 px-16">
            <div className="text-center  shadow-3xl hover:shadow-2xl cursor-pointer transition-shadow duration-200 bg-white inline-block px-3 pt-3  ">
              <img onClick={handleModal} class="img_1" src={require("../img/dog.png").default} width="300px" height="300px" />
              <p className="my-3 text-white">귀여운 댕댕이</p>
            </div>
          </div>
          <div className="space-x-9 px-16">
            <div className="text-center  shadow-3xl hover:shadow-2xl cursor-pointer transition-shadow duration-200 bg-white inline-block px-3 pt-3">
              <img onClick={handleModal} src={require("../img/dog.png").default} width="300px" height="300px" />
              <p className="my-3 text-white">귀여운 댕댕이</p>
            </div>
          </div>
          <div className="space-x-9 px-16">
            <div className="text-center  shadow-3xl hover:shadow-2xl cursor-pointer transition-shadow duration-200 bg-white inline-block px-3 pt-3">
              <img onClick={handleModal} src={require("../img/dog.png").default} width="300px" height="300px" />
              <p className="my-3 text-white">귀여운 댕댕이</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
