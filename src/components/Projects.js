import React, { useEffect, useState } from "react";
import "./Projects.css";
import BottomButton from "./BottomButton";
import ScrollRedirect from "./ScrollRedirect";
import ProjectItem from "./ProjectItem";

// Image Imports
import projectList from "./projectList"

function Projects(props) {
  useEffect(() => {
    props.setPage("projects");
  }, []);

  const projectItems = projectList.map(item => 
    <ProjectItem
    title={item.title}
    imgURL={item.imgURL}
    gitURL={item.gitURL}
    webURL={item.webURL}
    description={item.description}
  />
  )

  return (
    <div className="projects-container">
      <BottomButton link="about" title="About Me" />
      {/* <ScrollRedirect back="/home" forward="/about"/> */}
      <div className="projects-items-container">
        {/* <ProjectItem
          imgURL={streamhub}
          gitURL={null}
          webURL={null}
          title={"StreamHub"}
        />
        <ProjectItem
          imgURL={gateapp}
          gitURL={null}
          URL={null}
          title={"GateApp Dashboard"}
        />
        <ProjectItem
          imgURL={calculator}
          gitURL={null}
          webURL={null}
          title={"Responsive Calculator"}
        />
        <ProjectItem
          imgURL={streamhub}
          gitURL={null}
          webURL={null}
          title={"StreamHub"}
        />
        <ProjectItem
          imgURL={gateapp}
          gitURL={null}
          webURL={null}
          title={"GateApp Dashboard"}
        />
        <ProjectItem
          imgURL={calculator}
          gitURL={null}
          webURL={null}
          title={"Responsive Calculator"}
        /> */}
        {projectItems}
      </div>
    </div>
  );
}

export default Projects;
