import React from "react";
import ProgrammingSkill from "./ProgrammingSkill";
import Project from "./Project";
import HireMe from "./HireMe";
import About from "./About";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Resume from "./Resume";
import Hr from "./Hr";
import Layout from "./Layout";

export default function Home() {
  return (
    <Layout>
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
    </Layout>
  );
}
