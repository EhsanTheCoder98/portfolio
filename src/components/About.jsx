import React from "react";
import "../styles/styles.css";
import me from "../images/me.jpg";

const About = () => {
  return (
    <div className="aboutContainer">
      <div  className="head">
        <h1>
          About <span>Me!</span>
        </h1>
      </div>
      <div className="image">
        <div className="blueCircle"></div>
        <div className="whiteCircle"></div>
        <img src={me} alt="me" />
      </div>
      <div className="paragraph">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus impedit, nulla eum totam cumque similique corrupti atque nobis fuga odio excepturi magnam commodi alias? Praesentium numquam accusamus commodi labore, consequatur rem perferendis non provident expedita magni qui maxime laboriosam reprehenderit tempore, fuga consectetur maiores iusto dicta sed hic nulla tempora! Quia voluptate neque voluptas sint temporibus earum quae atque. Unde perferendis, asperiores corporis deserunt recusandae ipsam esse eos quis aliquam itaque. Saepe cumque soluta ipsum tenetur, quidem unde numquam voluptatum maxime! Laboriosam natus, sit repellendus quia eius quae numquam, itaque officia alias impedit, corrupti hic. Deserunt minima commodi sunt officia.</p>
      </div>
      <div className="buttonContainer">
        <button>Read More</button>
      </div>
    </div>
  );
};

export default About;
