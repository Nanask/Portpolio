import "./App.css";
import Headers from "./comps/Headers";
import Intro from "./comps/Intro";
import Project from "./comps/Project";
import Skill from "./comps/Skill";
import ModeProvider from "./provider/ModeProvider";
import { Globalstyle } from "./theme/GlobalStyle";
import { Modal } from "./comps/Modal";
import ModalContext from "./provider/ModalProvider";
import { Footer } from "./comps/Footer";

function App() {
  return (
    <div>
      <ModeProvider>
        <ModalContext>
          <Modal />
          {/* <Globalstyle /> */}
          <Headers />
          <Intro />
          <Project />
          <Skill />
          <Footer />
        </ModalContext>
      </ModeProvider>
    </div>
  );
}

export default App;
