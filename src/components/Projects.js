import React, { useEffect, useState } from "react";
import "./Projects.css"
import BottomButton from "./BottomButton";

function Projects(props) {
  useEffect(() => {
    props.setPage("projects");
  }, []);

  return (
    <div className="projects-container">
      <BottomButton link="about" title="About Me"/>
    </div>
  );
}

export default Projects;
