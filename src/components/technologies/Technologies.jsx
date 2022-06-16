import React from "react";
import "./technologies.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faBootstrap,
  faReact,
  faNodeJs,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Technologies = () => {
  return (
    <section id="technologies">
      <h5>What I Worked With</h5>
      <h2>Experience</h2>

      <div className="container technologiesContainer">
        <div className="frontend">
          <h3>Frontend Development</h3>
          <div className="technologiesContent">
            <article className="codingLanguage">
              <FontAwesomeIcon className="navIcon" icon={faHtml5} />
              <h4>HTML 5</h4>
            </article>
            <article className="codingLanguage">
              <FontAwesomeIcon className="navIcon" icon={faCss3} />
              <h4>CSS 3</h4>
            </article>
            <article className="codingLanguage">
              <FontAwesomeIcon className="navIcon" icon={faJsSquare} />
              <h4>JavaScript</h4>
            </article>
            <article className="codingLanguage">
              <FontAwesomeIcon className="navIcon" icon={faBootstrap} />
              <h4>Bootstrap</h4>
            </article>
            <article className="codingLanguage">
              <FontAwesomeIcon className="navIcon" icon={faReact} />
              <h4>React</h4>
            </article>
            <article className="codingLanguage">
              <FontAwesomeIcon className="navIcon" icon={faReact} />
              <h4>React Native</h4>
            </article>
          </div>
        </div>

        <div className="backend">
          <h3>Backend Development</h3>
          <div className="technologiesContent">
            <article className="codingLanguage">
              <FontAwesomeIcon className="navIcon" icon={faNodeJs} />
              <h4>NodeJS</h4>
            </article>
            <article className="codingLanguage">
              <FontAwesomeIcon className="navIcon" icon={faNodeJs} />
              <h4>Express</h4>
            </article>
            <article className="codingLanguage">
              <FontAwesomeIcon className="navIcon" icon={faDatabase} />
              <h4>MongoDB</h4>
            </article>
            <article className="codingLanguage">
              <FontAwesomeIcon className="navIcon" icon={faJava} />
              <h4>Java</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
