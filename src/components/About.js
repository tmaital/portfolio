import React, { useEffect, useState } from "react";
import "./About.css";
import BottomButton from "./BottomButton";

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
      <BottomButton link="contact" title="Contact"/>
    </div>
  );
}

export default About;
