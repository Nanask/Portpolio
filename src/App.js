import "./App.css";
import Headers from "./comps/Headers";
import Intro from "./comps/Intro";
import Project from "./comps/Project";
import Skill from "./comps/Skill";
import ModeProvider from "./provider/ModeProvider";

function App() {
  return (
    <div>
      <ModeProvider>
        <Headers />
        <Intro />
        <Project />
        <Skill />
      </ModeProvider>
    </div>
  );
}

export default App;
