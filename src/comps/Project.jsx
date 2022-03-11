import React, { useCallback, useState } from "react";
import "../css/project.css";
import dog from "../img/dog.png";
import { useThemecontext } from "./../provider/ModeProvider";
import { Modal } from "./Modal";
import { useModalContext } from "./../provider/ModalProvider";

function Project() {
  const { switchModal } = useModalContext();
  return (
    <section className="bg-black">
      <div className="my-14 text-center ">
        <h1 className=" text-white text-center text-2xl font-bold">PROJECTS</h1>
      </div>
      <div>
        <ul className="flex justify-center">
          <li className="mx-10">
            <div className=" text-center hover: cursor-pointer">
              <img onClick={switchModal} class="img_1" src={dog} width="300px" height="300px" />
              <p className="my-3 text-white">귀여운 댕댕이</p>
            </div>
          </li>
          <li className="mx-10">
            <div className="text-center hover: cursor-pointer">
              <img onClick={switchModal} src={dog} width="300px" height="300px" />
              <p className="my-3 text-white">귀여운 댕댕이</p>
            </div>
          </li>
          <li className="mx-10">
            <div className="text-center hover: cursor-pointer">
              <img onClick={switchModal} src={dog} width="300px" height="300px" />
              <p className="my-3 text-white">귀여운 댕댕이</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Project;
