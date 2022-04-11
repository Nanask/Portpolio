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
import { Nav } from "./comps/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });

  return (
    <BrowserRouter>
      <ModeProvider>
        {/* <Routes>
          <Route path="/" element={<Headers />}></Route>
        </Routes> */}
        <Globalstyle />
        <Modal />
        <Headers />
        <Intro />
        <Project />
        <Skill />
        <Footer />
        {/* </Globalstyle> */}
      </ModeProvider>
    </BrowserRouter>
  );
}

export default App;
