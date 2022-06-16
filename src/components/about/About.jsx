import React from "react";
import "./about.css";
import Nav from "../nav/Nav";
import ProfilePic from "../../assets/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBacterium,
  faBowlRice,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div>
      <Nav />
      <section id="about">
        <h5>Getting to Know</h5>
        <h2>Me</h2>

        <div className="container aboutContainer">
          <div className="aboutMe">
            <img className="aboutImg" src={ProfilePic} alt="Picture of David" />
          </div>

          <div className="aboutText">
            <div className="aboutContent">
              <div className="aboutCards">
                <article className="aboutCard">
                  <FontAwesomeIcon className="aboutIcon" icon={faBacterium} />
                  <h5>Lorem</h5>
                  <small>Lorem, ipsum dolor</small>
                </article>
                <article className="aboutCard">
                  <FontAwesomeIcon className="aboutIcon" icon={faBowlRice} />
                  <h5>Lorem</h5>
                  <small>Lorem, ipsum dolor</small>
                </article>
                <article className="aboutCard">
                  <FontAwesomeIcon className="aboutIcon" icon={faCloud} />
                  <h5>Lorem</h5>
                  <small>Lorem, ipsum dolor</small>
                </article>
              </div>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                aperiam culpa dignissimos harum laborum ex veniam. Recusandae a,
                itaque blanditiis illo corrupti asperiores ea obcaecati officiis
                nostrum quasi quo alias.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
