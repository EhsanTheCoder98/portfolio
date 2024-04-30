import React from "react";


// Icons
import { FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Main = () => {
  const letsTalkHandler = (e) => {
    e.preventDefault();
    window.location.href = "https://Wa.me/+989393502621";
  };
  const emailHandler = (e) => {
    e.preventDefault();
    window.location.href = "mailto:www.ehsanfathalipour110@gmail.com";
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
        Over the past year, I've dedicated myself to mastering the art of creating visually appealing and functional websites. Using ReactJS, a powerful framework for web development, I've crafted various web applications.Eager to expand my knowledge and skills in web development,I am enthusiastic about embracing new technologies and honing my craft every day, currently focusing on learning Next.js. Now, equipped with this knowledge, I am prepared to take the next step in my journey and pursue my first job in the field.
        </p>
        <div className="buttonContainer">
          <button className="button1" onClick={emailHandler}>
            Hire me <MdOutlineEmail className="github"/>
          </button>
          <button className="button2" onClick={letsTalkHandler}>
            Lets Talk <FaWhatsapp className="github"/>
          </button>
          <button onClick={gitHandler}>Check my Github<FiGithub className="github" /></button>
        </div>
      </section>
    </div>
  );
};

export default Main;
