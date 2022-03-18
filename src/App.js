import "./App.css";
import Headers from "./comps/Headers";
import Intro from "./comps/Intro";
import Project from "./comps/Project";
import Skill from "./comps/Skill";
import ModeProvider from "./provider/ModeProvider";
import { Globalstyle } from "./theme/GlobalStyle";
import { Modal } from "./comps/Modal";
import { Footer } from "./comps/Footer";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div>
      <ModeProvider>
        <Modal />
        {/* <Globalstyle /> */}
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
