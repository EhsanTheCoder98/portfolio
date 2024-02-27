import React from "react";
import "../styles/styles.css";

// icons
import { SlCalender } from "react-icons/sl";

const Education = () => {
  return (
    <div className="educationContainer">
      <h1>
        My <span>Journey!</span>
      </h1>
      <div className="eachJourneyDiv">
        <div>
          <div className="header">
            <SlCalender className="icon" />
            <span>September 2013 - May 2017</span>
          </div>
          <p>High School Diploma,Shahid Rajaee,Karaj-Iran</p>
        </div>
        <div>
          <div className="header">
            <SlCalender className="icon" />
            <span>September 2018 – May 2020</span>
          </div>
          <p>Management student at Azad University of Karaj (Resigned)</p>
        </div>
        <div>
          <div className="header">
            <SlCalender className="icon" />
            <span>2010 – 2015</span>
          </div>
          <p>5 years of private English courses</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
