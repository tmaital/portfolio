import React, { useState } from "react";
import "./ProjectItem.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons" 
import { faGlobeAmericas, faTimes, faLink, faCode } from "@fortawesome/free-solid-svg-icons";
import browserMockup from "./Assets/browser.png"



function ProjectsItem(props) {

    const [showModal, setShowModal] = useState(null)

    const handleClose = (event) => {
        if(event.target === event.currentTarget) 
        handleHide()
    }

    const handleShow = () => {
        setShowModal(true)
    }

    const handleHide = () => {
        setShowModal(null)
    }

    const techIcon = props.

    const ItemModal = showModal ? <div className="project-modal-container" onClick={handleClose}>
                                    <div className="project-modal-container-window-parent">
                                        <div className="project-modal-container-window">
                                            <div className="project-modal-container-close-button" onClick={handleHide}>
                                                <FontAwesomeIcon icon={faTimes} size="1x"/>
                                            </div>
                                            <div>
                                                <div>
                                                    <img src={browserMockup} alt="Browser Mockup" style={{width:"500px"}}/>
                                                </div>
                                                <div>
                                                    <div>{props.title}</div>
                                                    <div>Icons of Tech Used</div>
                                                    <div>{props.description}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  </div> : null

  return (
    <div className="project-item-container">
            <img className="project-screenshot" src={props.imgURL} alt={props.title} onClick={handleShow}/>
            <div className="project-item-buttons">
                <div 
                className="project-item-icons-buttons-code"
                onClick={() => window.open(props.gitURL)}>
                <FontAwesomeIcon icon={faCode} size="1x"/>
                </div>
                <div 
                className="project-item-icons-buttons-link"
                onClick={() => window.open(props.webURL)}>
                <FontAwesomeIcon icon={faLink} size="1x"/>
                </div>                                
            </div>
        {ItemModal}
    </div>
  );
}

export default ProjectsItem;

