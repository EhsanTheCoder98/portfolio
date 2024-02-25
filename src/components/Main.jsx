import React from "react";

// Icons
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { LiaTelegram } from "react-icons/lia";

const Main = () => {
  const letsTalkHandler = (e) => {
    e.preventDefault();
    window.location.href = "https://Wa.me/+989393502621";
  };
  const emailHandler = (e) => {
    e.preventDefault();
    window.location.href = "mailto:ehsanfathalipour110@gmail.com";
  };
  const gitHandler = (e) => {
    e.preventDefault();
    window.location.href = "https://github.com/EhsanTheCoder98";
  };
  return (
    <div>
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
        Hey there! For about a year now, I've been learning all about making websites look great and work smoothly. I've been using ReactJS, a fancy tool for building web stuff, to create this webpage you're looking at. It's like my online resume, where I can show off what I can do as a beginner web developer. Take a look around, and you'll see some projects I've worked on. I'm all about making things easy to use and nice to look at. Thanks for stopping by!
        </p>
        <div className="buttonContainer">
          <button className="button1" onClick={emailHandler}>
            Hire me
          </button>
          <button className="button2" onClick={letsTalkHandler}>
            Lets Talk
          </button>
        </div>
        <div className="icons">
          <FiGithub className="github" onClick={gitHandler} />
        </div>
      </section>
    </div>
  );
};

export default Main;
