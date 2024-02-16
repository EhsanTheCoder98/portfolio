import React from "react";
import "./styles/styles.css";

// components
import Header from "./components/Header";
import Main from "./components/Main";

const Landing = () => {
  return (
    <div className="body">
      <Header />
      <Main />
    </div>
  );
};

export default Landing;
