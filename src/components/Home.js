import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Typist from "react-typist";
import "./Home.css";
import BottomButton from "./BottomButton";

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
      <Typist className="home-typist">
        <span className="home-typist-first">Hi, my name is Tal</span>
        <Typist.Delay ms={800} />
        <br />
        <span className="home-typist-second">
          I love creating Beautiful, Simple {"&"} Fast Web Apps
        </span>
      </Typist>
      <button
        className="home-projects-button"
        onClick={() =>
          setTimeout(() => {
            handleClick();
          }, 500)
        }
      >
        View Projects
      </button>
      <BottomButton link="projects" title="View Projects" />
      {isRedirect ? <Redirect to="/projects" /> : null}
    </div>
  );
}

export default Home;
