import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faUser,
  faBookOpen,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
  return (
    <div className="navDiv">
      <nav className="navContainer">
        <h2>D日T</h2>
        <ul>
          <li>
            <a href="/">
              <FontAwesomeIcon className="navIcon" icon={faHouseChimney} />
              Home
            </a>
          </li>
          <li>
            <a href="/about">
              <FontAwesomeIcon className="navIcon" icon={faUser} />
              About
            </a>
          </li>
          <li>
            <a href="/technologies">
              <FontAwesomeIcon className="navIcon" icon={faBookOpen} />
              Experience
            </a>
          </li>
          <li>
            <a href="/contact">
              <FontAwesomeIcon className="navIcon" icon={faAddressCard} />
              Contact Me
            </a>
          </li>
        </ul>
        <div className="navSocials">
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
      </nav>
    </div>
  );
};

export default Nav;
