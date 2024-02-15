import React from "react";
import "./styles/styles.css";
import { FiGithub } from "react-icons/fi";
import { TfiTwitter } from "react-icons/tfi";
import { FiLinkedin } from "react-icons/fi";
import { LuInstagram } from "react-icons/lu";
import { LiaTelegram } from "react-icons/lia";

const Landing = () => {
  return (
    <div className="body">
      <header>
        <nav className="navbar">
          <div>
            <h1>Ehsan.</h1>
          </div>
          <div className="links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>
      <section className="main">
        <div className="intro">
        <h1>
          Hi,I'm <span>Ehsan Fathalipour</span>
        </h1>
        </div>
        <div className="role">
          <h1>Front-End Developer</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ratione
          inventore similique veniam, nemo minima eos magni? Animi quis a illo
          quod, incidunt beatae repudiandae, adipisci neque labore magni
          eveniet, voluptates at praesentium deleniti quaerat repellat. Quis
          unde, nostrum reiciendis dolorem quia animi voluptatibus explicabo
          assumenda inventore, excepturi, enim modi!
        </p>
        <div className="buttonContainer">
          <button className="button1">Hire me</button>
          <button className="button2">Lets Talk</button>
        </div>
        <div className="icons">
          <FiGithub className="github" />
          <TfiTwitter className="github" />
          <FiLinkedin className="github"/>
          <LuInstagram className="github"/>
          <LiaTelegram className="github"/>
        </div>
      </section>
    </div>
  );
};

export default Landing;
