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
import { theme } from "./theme/Theme";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });

  return (
    <ModeProvider>
      <Globalstyle />
      <Modal />
      <Headers />
      <Intro />
      <Project />
      <Skill />
      <Footer />
      {/* </Globalstyle> */}
    </ModeProvider>
  );
}

export default App;
