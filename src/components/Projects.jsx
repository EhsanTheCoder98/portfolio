import React from "react";
import "../styles/styles.css";

const Projects = () => {
  return (
    <div className="projectsContainer">
      <h1>
          My <span>Projects!</span>
        </h1>
      <div className="projects">
      <div>
          <h1>1.Portfolio</h1>
          <p>Checkout my portfolio page's codes!</p>
          <a href="https://github.com/EhsanTheCoder98/portfolio.git" target="_blank">
            Click to see the project
          </a>
        </div>
        <div>
          <h1>2.Verificattion form</h1>
          <p>It's a login/signup form with validations i wrote Using JS</p>
          <a href="https://github.com/EhsanTheCoder98/Login-form-with-validations.git" target="_blank">
            Click to see the project
          </a>
        </div>
        <div>
          <h1>3.Contacts App</h1>
          <p>
            I developed a ReactJS application resembling a digital phonebook,
            complete with data validation features to ensure the accuracy of
            user-provided information.It also uses localStorage to store
            informations in user's browser.
          </p>
          <a href="https://github.com/EhsanTheCoder98/Contact-App.git" target="_blank">
            Click to see the project
          </a>
        </div>
        <div>
          <h1>4.Book Library</h1>
          <p>
            I have developed a basic book library application utilizing a
            JavaScript document to store book information, with an added feature
            that allows users to express their liking for the books.
          </p>
          <a href="https://github.com/EhsanTheCoder98/Library.git" target="_blank">
            Click to see the project
          </a>
        </div>
        <div>
          <h1>5.Shop</h1>
          <p>
            The shopping app includes a login page, a products page, a product
            details page, and features filtering and searching capabilities. It
            utilizes a fake API with Axios and REST methods and employs localStorage to
            save user information within the browser.
          </p>
          <a href="https://github.com/EhsanTheCoder98/Mini-Shop.git" target="_blank">
            Click to see the project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
