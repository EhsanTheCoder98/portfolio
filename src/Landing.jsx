import React from "react";
import "./styles/styles.css";
import { FaAngleDoubleUp } from "react-icons/fa";

// components
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const Landing = () => {
  return (
    <div className="body">
      <Header />
      <Main />
      <About />
      <Education />
      <Skills />
      <Footer />
      <div className="flashUp">
        <FaAngleDoubleUp className="pointer" />
      </div>
    </div>
  );
};

export default Landing;
