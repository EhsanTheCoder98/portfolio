import React, { useState } from "react";
import "./styles/styles.css";
import { FaAngleDoubleUp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-scroll";

// components
import Main from "./components/Main";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const Landing = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [ham, setHam] = useState(false);

  return (
    <div className="body">
      <nav className="navbar">
        <div>
          <h1>Ehsan.</h1>
        </div>
        <div className="links">
          <Link
            className="eachlink"
            to="main"
            spy={true}
            smooth={true}
            duration={100}
            offset={-70}
          >
            Home
          </Link>
          <Link
            className="eachlink"
            to="aboutContainer"
            spy={true}
            smooth={true}
            duration={100}
            offset={-40}
          >
            About
          </Link>
          <Link
            className="eachlink"
            to="educationContainer"
            spy={true}
            smooth={true}
            duration={100}
            offset={-40}
          >
            Education
          </Link>
          <Link
            className="eachlink"
            to="skills"
            spy={true}
            smooth={true}
            duration={100}
            offset={-250}
          >
            Skills
          </Link>
        </div>
        <div className="hamburger">
          {!ham && <GiHamburgerMenu className="hamIcon" onClick={() => setHam(!ham)} />}
          {ham && (
            <div className="dropDown">
              <MdOutlineClose className="close" onClick={() => setHam(!ham)} />
              <div>
                
              </div>
            </div>
          )}
        </div>
      </nav>
      <Main id="main" />
      <About id="aboutContainer" />
      <Education id="educationContainer" />
      <Skills id="skills" />
      <Footer />
      <div className="flashUp">
        <FaAngleDoubleUp className="pointer" onClick={scrollToTop} />
      </div>
    </div>
  );
};

export default Landing;
