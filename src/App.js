import "./styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ProgrammingSkill from "./components/ProgrammingSkill";
import Project from "./components/Project";
import HireMe from "./components/HireMe";
import About from "./components/About";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <ProgrammingSkill />
      <Project />
      <HireMe />
      <About />
      <FAQ />
      <Resume />
      <Contact />
    </>
  );
}

export default App;
