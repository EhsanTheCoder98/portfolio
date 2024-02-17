import React from "react";
import "../styles/styles.css";

const Skills = () => {
  return (
    <div className="skillsContainer">
      <h1>Skills!</h1>
      <div className="container">
        <div className="skills">
          <h1>Coding Skills</h1>
          <div className="spanContainer">
          <span>#HTML/CSS</span>
          <span>#Javascript</span>
          <span>#ReactJs</span>
          <span>#Rest API</span>
          <span>#GraphQl</span>
          <span>#Redux</span>
          <span>#SASS</span>
          <span>#MaterialUI</span>
          <span>#Git/Github</span>
          <span>#NextJs(Learning⏳)</span>
          </div>
        </div>
        <div className="softSkills">
          <h1>Soft Skills</h1>
          <div className="spanContainer">
            <span>#English Knowledge</span>
            <span>#Adaptability</span>
            <span>#Attention to detail</span>
            <span>#Team Work</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
