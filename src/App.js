import "./styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import AOS from "aos";
import ProgrammingSkill from "./components/ProgrammingSkill";
import Project from "./components/Project";
import HireMe from "./components/HireMe";
import About from "./components/About";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Resume from "./components/Resume";
import { useEffect } from "react";
import Hr from "./components/Hr";

function App() {
  useEffect(function () {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  
  return (
    <div className="bg-color">
      <Project />
      <HireMe />
      <About />
      <Hr />
      {/* <FAQ />
      <Hr /> */}
      <Resume />
      <ProgrammingSkill />
      <Hr />
      <Contact />
    </div>
  );
}

export default App;
