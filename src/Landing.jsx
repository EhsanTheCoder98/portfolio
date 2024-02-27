import React, { useState } from "react";
import "./styles/styles.css";
import { Link } from "react-scroll";

// icons
import { FaAngleDoubleUp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

// components
import Main from "./components/Main";
import Projects from "./components/Projects";
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
            to="projectsContainer"
            spy={true}
            smooth={true}
            duration={100}
            offset={-40}
          >
            Projects
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
            to="skillsContainer"
            spy={true}
            smooth={true}
            duration={100}
            offset={-40}
          >
            Skills
          </Link>
        </div>
        <div className="hamburger">
          {!ham ? (
            <GiHamburgerMenu className="hamIcon" onClick={() => setHam(!ham)} />
          ) : (
            <MdOutlineClose className="hamIcon" onClick={() => setHam(!ham)} />
          )}
          {ham && (
            <div className="dropDown">
              <div className="dropDownLinks">
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
                  to="projectsContainer"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-40}
                >
                  Projects
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
                  to="skillsContainer"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-40}
                >
                  Skills
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      <Main id="main" />
      <Projects id="projectsContainer" />
      <Education id="educationContainer" />
      <Skills id="skillsContainer" />
      <Footer />
      <div className="flashUp">
        <FaAngleDoubleUp className="pointer" onClick={scrollToTop} />
      </div>
    </div>
  );
};

export default Landing;
