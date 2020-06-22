import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Typist from "react-typist";
import "./Home.css";
import BottomButton from "./BottomButton";
import ScrollRedirect from "./ScrollRedirect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Home(props) {
  const [isRedirect, setIsRedirect] = useState(null);

  useEffect(() => {
    props.setPage("home");
  }, []);

  const handleClick = () => {
    setIsRedirect(true);
  };


  return (
    <div className="home-container">
      <div className="home-titles-wrapper">
        <h1>
          I'm Tal Maital
        </h1>
        <h1>
          A Front-End Developer
        </h1>
        <h2>
          based in Israel.
        </h2>
        <Typist className="home-typist">
          <span className="home-typist-first">
            I'm passionate about creating Beautiful,
          </span>
          <br/>
          <span className="home-typist-second">
            Simple {"&"} Fast Web Apps
          </span>
        </Typist>
        <div
          className="home-projects-button"
          onClick={() =>
            setTimeout(() => {
              handleClick();
            }, 500)
          }
        >
          View My Projects
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <div className="home-shapes-wrapper">
        <div className="home-shapes-background-circle"></div>
        <div className="home-shapes-square-1"></div>
        <div className="home-shapes-square-2"></div>
        <div className="home-shapes-square-3"></div>
        <div className="home-shapes-square-4"></div>
        <div className="home-shapes-square-5"></div>
        <div className="home-shapes-square-6"></div>
        <div className="home-shapes-square-7"></div>
        <div className="home-shapes-square-8"></div>
      </div>
      <BottomButton link="projects" title="View Projects" />
      {isRedirect ? <Redirect to="/projects" /> : null}
      <ScrollRedirect back="/contact" forward="/projects"/>
    </div>
  );
}

export default Home;
