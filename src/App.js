import logo from "./logo.svg";
import "./App.css";
import Headers from "./comps/Headers";
import Intro from "./comps/Intro";
import Project from "./comps/Project";
import Skill from "./comps/Skill";

function App() {
  return (
    <div>
      <Headers />
      <Intro />
      <Project />
      <Skill />
    </div>
  );
}

export default App;
