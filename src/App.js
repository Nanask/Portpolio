import "./App.css";
import Headers from "./comps/Headers";
import Intro from "./comps/Intro";
import Project from "./comps/Project";
import Skill from "./comps/Skill";
import ModeProvider from "./provider/ModeProvider";
import { Globalstyle } from "./theme/GlobalStyle";
import { Modal, modalStore } from "./comps/Modal";
import { Footer } from "./comps/Footer";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });

  const { flagModal, handleModal } = modalStore();

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
