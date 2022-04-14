import "./App.css";
import Headers from "./comps/Headers";

import Project from "./comps/Project";
import Skill from "./comps/Skill";
import ModeProvider from "./provider/ModeProvider";
import { Globalstyle } from "./theme/GlobalStyle";
import { Modal, modalStore } from "./comps/Modal";
import { Footer } from "./comps/Footer";
import AOS from "aos";
import { useEffect, useRef } from "react";
import { theme } from "./theme/Theme";
import { Nav } from "./comps/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Intro } from "./comps/Intro";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });

  const introRef = useRef();

  return (
    <BrowserRouter>
      <ModeProvider>
        {/* <Routes>
          <Route path="/" element={<Headers />}></Route>
          <Route path="/about" element={<Intro />}></Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/skill" element={<Skill />}></Route>
          <Route path="/content" element={<Footer />}></Route>
        </Routes> */}
        <Globalstyle />
        <Modal />
        <Headers />
        <Intro ref={introRef} />
        <Project />
        <Skill />
        <Footer />
        {/* </Globalstyle> */}
      </ModeProvider>
    </BrowserRouter>
  );
}

export default App;
