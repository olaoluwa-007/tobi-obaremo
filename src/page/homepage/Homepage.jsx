import React from "react";
import Hero from "../../sections/hero/Hero";
import About from "../../sections/about/About";
import Projects from "../../sections/project/Project";
import Skills from "../../sections/skill/Skills";
import Contact from "../../sections/contact/Contact";

const Homepage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default Homepage;
