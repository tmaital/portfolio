import React, { useEffect } from "react";
import "./About.css";
import BottomButton from "./BottomButton";
import ScrollRedirect from "./ScrollRedirect";
import ReactTooltip from "react-tooltip"


// imports

import reacticon from "./Assets/dev/react.svg"
import firebaseicon from "./Assets/dev/firebase.svg"
import cssicon from "./Assets/dev/css.svg"
import htmlicon from "./Assets/dev/html.svg"
import jsicon from "./Assets/dev/js.svg"
import mongoicon from "./Assets/dev/mongo.svg"
import illustratoricon from "./Assets/design/illustrator.svg"
import xdicon from "./Assets/design/xd.svg"
import indesignicon from "./Assets/design/indesign.svg"
import photoshopicon from "./Assets/design/photoshop.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";


function About(props) {

  useEffect(() => {
    props.setPage("about");
  }, []);

  return (
    <div className="about-container">
      <div className="about-left-container">
        <div className="about-aboutme">
          <h2>About Me</h2>
          <p>
            Hey I'm Tal, a Front-End Web Developer based in Tel Aviv, Israel. <br/>
            I'm passionate about building unique high quality web applications, and developing 
            fast, pixel perfect user interfaces that live on the web.
          </p>
        </div>
        <div className="about-whatido">
          <h2>What I Do</h2>
          <p>
            Web Development | Responsive UI Design | UX Design
          </p>
        </div>
        <div className="about-resume-button" onClick={() => window.open("https://www.tmaital.com/resume.pdf")}>
          My Resume
          <FontAwesomeIcon icon={faIdCard} />
        </div>
      </div>
      <div className="about-right-container">
        <div className="about-skills">
          <h2>Skills</h2>
          <div className="about-skills-icons">
          <ReactTooltip effect="solid" delayShow={200}/>
            <div className="about-skills-icons-dev">
              <div className="about-skills-dev-tag">
                <h3 className="about-skills-dev-tag-text">Development</h3>
              </div>
              <div className="about-skills-icons-dev-top">
                <img data-tip="Reactjs and React Native" src={reacticon} alt="react icon" />
                <img data-tip="HTML5" src={htmlicon} alt="html icon" />
                <img data-tip="CSS3" src={cssicon} alt="css icon" />
                <img data-tip="Javascript ES6" src={jsicon} alt="js icon" />
              </div>
              <div className="about-skills-icons-dev-bottom">
                <img data-tip="MongoDB" src={mongoicon} alt="mongo icon" />
                <img data-tip="Firebase" src={firebaseicon} alt="firebase icon" />
              </div>
            </div>
            <div className="about-skills-icons-design">
            <div className="about-skills-design-tag">
                <h3 className="about-skills-design-tag-text">Design</h3>
            </div>
              <img data-tip="Adobe Experience Design" src={xdicon} alt="react icon" />
              <img data-tip="Adope Illustrator" src={illustratoricon} alt="html icon" />
              <img data-tip="Adobe inDesign" src={indesignicon} alt="css icon" />
              <img data-tip="Adobe Photoshop" src={photoshopicon} alt="js icon" />
            </div>
          </div>
        </div>
      </div>
      <BottomButton link="contact" title="Contact"/>
      <ScrollRedirect back="/projects" forward="/contact"/>
    </div>
  );
}

export default About;
