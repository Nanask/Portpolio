import AOS from "aos";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Footer } from "./comps/Footer";
import Headers from "./comps/Headers";
import { Intro } from "./comps/Intro";
import { Modal } from "./comps/Modal";
import Project from "./comps/Project";
import Skill from "./comps/Skill";
import ModeProvider from "./provider/ModeProvider";
import { Globalstyle } from "./theme/GlobalStyle";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });

  return (
    <BrowserRouter>
      <ModeProvider>
        <Globalstyle />
        <Modal />
        <Headers />
        <Intro />
        <Project />
        <Skill />
        <Footer />
      </ModeProvider>
    </BrowserRouter>
  );
}

export default App;
