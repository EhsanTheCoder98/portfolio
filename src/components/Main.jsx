import React from "react";

// Icons
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { LiaTelegram } from "react-icons/lia";

const Main = () => {
  const letsTalkHandler = (e) => {
    e.preventDefault();
    window.location.href="https://Wa.me/+989393502621";
  }
  const emailHandler = (e) => {
    e.preventDefault();
    window.location.href="mailto:ehsanfathalipour110@gmail.com";
  }
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ratione
            inventore similique veniam, nemo minima eos magni? Animi quis a illo
            quod, incidunt beatae repudiandae, adipisci neque labore magni
            eveniet, voluptates at praesentium deleniti quaerat repellat. Quis
            unde, nostrum reiciendis dolorem quia animi voluptatibus explicabo
            assumenda inventore, excepturi, enim modi!
          </p>
          <div className="buttonContainer">
            <button className="button1" onClick={emailHandler}>Hire me</button>
            <button className="button2" onClick={letsTalkHandler}>Lets Talk</button>
          </div>
          <div className="icons">
            <FiGithub className="github" />
            <FiLinkedin className="github" />
            <LiaTelegram className="github" />
          </div>
        </section>
      </div>
  );
};

export default Main;
