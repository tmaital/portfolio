import React, { useEffect } from "react";
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
    techUsed={item.techUsed}
  />
  )

  return (
    <div className="projects-container">
      <ScrollRedirect back="/home" forward="/about"/>
      <div className="projects-scroll-wrapper">
        <div className="projects-items-container">
          {projectItems}
        </div>
      </div>
      <BottomButton link="about" title="About Me" />
    </div>
  );
}

export default Projects;
