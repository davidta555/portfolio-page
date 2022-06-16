import React from "react";
import "./main.css";
import CV from "../../assets/CV.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Main = () => {
  return (
    <div className="main">
      <div></div>
      <div className="mainTitle">
        <h5>Hello, I'm</h5>
        <h1>David Ta</h1>
        <h5>Fullstack Developer</h5>
      </div>

      <div className="mainNav">
        <a href={CV} download className="btn btn-primary">
          Download CV
        </a>
        <a href="about" className="btn btn-primary">
          About Me
        </a>
        <a href="technologies" className="btn btn-primary">
          My Experience
        </a>
        <a href="contact" className="btn btn-primary">
          Connect with Me
        </a>
      </div>

      <div className="mainSocials">
        <a
          href="https://www.linkedin.com/in/david-ta-008808138/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/davidta555" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.facebook.com/david.ta.7921" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/dta5555/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
};

export default Main;
