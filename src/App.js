import "./App.css";
import Headers from "./comps/Headers";
import Intro from "./comps/Intro";
import Project from "./comps/Project";
import Skill from "./comps/Skill";
import ModeProvider from "./provider/ModeProvider";
import { Globalstyle } from "./theme/GlobalStyle";
import { Modal, modalStore } from "./comps/Modal";
import { Footer } from "./comps/Footer";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import { useEffect, useRef } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  });

  const { flagModal, handleModal } = modalStore();

  // const closed = useRef();

  // const closeModal = (e) => {
  //   const target = e.target;

  //   console.log("target", target);
  //   // if (flagModal && (!closed.current || !closed.current.contains(e.target))) console.log(e.target);

  //   // handleModal(false);
  //   console.log(handleModal);
  // };

  // useEffect(() => {
  //   // window.addEventListener("click", closeModal);
  //   // // console.log("closemodal", closeModal);
  //   // return () => {
  //   window.removeEventListener("click", closeModal);
  //   console.log("이거뭐임");
  //   // };
  // }, []);

  return (
    <div>
      <ModeProvider>
        <Modal />
        {/* //<Globalstyle />  */}
        <Headers />
        <Intro />
        <Project />
        <Skill />
        <Footer />
      </ModeProvider>
    </div>
  );
}

export default App;
