import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Typist from "react-typist";
import "./Home.css";
import BottomButton from "./BottomButton";
import ScrollRedirect from "./ScrollRedirect";

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
      <div className="home-typist-wrapper">
        <Typist className="home-typist">
          <span className="home-typist-first">Hi, my name is Tal</span>
          <Typist.Delay ms={800} />
          <br />
          <span className="home-typist-second">
            I'm passionate about creating Beautiful, Simple {"&"} Fast Web Apps
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
          View Projects
        </div>
      </div>
      <BottomButton link="projects" title="View Projects" />
      {isRedirect ? <Redirect to="/projects" /> : null}
      {/* <ScrollRedirect back="/contact" forward="/projects"/> */}
    </div>
  );
}

export default Home;
