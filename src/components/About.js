import React, { useEffect, useState } from "react";
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


function About(props) {
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    props.setPage("about");
  }, []);

  const handleClick = () => {
    setRedirect(true);
  };

  return (
    <div className="about-container">
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
      <div className="about-skills">
        <h2>Skills</h2>
        <div className="about-skills-icons">
          <div className="about-skills-icons-dev">
            <ReactTooltip effect="solid" delayShow="500"/>
            <img data-tip="Reactjs and React Native" src={reacticon} alt="react icon" />
            <img data-tip="HTML5" src={htmlicon} alt="html icon" />
            <img data-tip="CSS3" src={cssicon} alt="css icon" />
            <img data-tip="Javascript ES6" src={jsicon} alt="js icon" />
            <img data-tip="MongoDB" src={mongoicon} alt="mongo icon" />
            <img data-tip="Firebase" src={firebaseicon} alt="firebase icon" />
            <h3 className="about-skills-icons-subtitle">Development</h3>
          </div>
          <div className="about-skills-icons-design">
            {/* <ReactTooltip/> */}
            <img data-tip="Adobe Experience Design" src={xdicon} alt="react icon" />
            <img data-tip="Adope Illustrator" src={illustratoricon} alt="html icon" />
            <img data-tip="Adobe inDesign" src={indesignicon} alt="css icon" />
            <img data-tip="Adobe Photoshop" src={photoshopicon} alt="js icon" />
            <h3 className="about-skills-icons-subtitle">Design</h3>
          </div>
          <div className="about-skills-icons-resume">
            <div className="about-skills-icons-resume-button" onClick={() => window.open("https://www.tmaital.com/resume.pdf")}>
              MY RESUME
            </div>
          </div>
        </div>
      </div>

      <BottomButton link="contact" title="Contact"/>
      {/* <ScrollRedirect back="/projects" forward="/contact"/> */}
    </div>
  );
}

export default About;
