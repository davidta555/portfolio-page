import React from "react";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faUser,
  faBookOpen,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <nav>
      <a href="#home">
        <FontAwesomeIcon icon={faHouseChimney} />
      </a>
      <a href="#about">
        <FontAwesomeIcon icon={faUser} />
      </a>
      <a href="#technologies">
        <FontAwesomeIcon icon={faBookOpen} />
      </a>
      <a href="#contact">
        <FontAwesomeIcon icon={faAddressCard} />
      </a>
    </nav>
  );
};

export default Nav;
