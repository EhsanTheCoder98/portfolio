import React from "react";
import "./styles/styles.css";

// components
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";

const Landing = () => {
  return (
    <div className="body">
      <Header />
      <Main />
      <About />
      <Education />
      <Skills />
    </div>
  );
};

export default Landing;
