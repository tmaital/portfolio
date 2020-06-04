import React, { useState } from "react";
import "./ProjectItem.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons" 
import { faGlobeAmericas, faTimes, faLink, faCode } from "@fortawesome/free-solid-svg-icons";



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
        setShowModal(true)
    }

    const ItemModal = showModal ? <div className="modal-container-login" name="mainmodal" onClick={handleClose}>
                                    <div className="modal-container-window-parent-login">
                                        <div className="modal-container-window-login">
                                            <div className="modal-close-button-login" onClick={handleHide}>
                                                <FontAwesomeIcon icon={faTimes} size="1x"/>
                                            </div>
                                            <div>

                                            </div>
                                        </div>
                                    </div>
                                  </div> : null

  return (
    <div className="project-item-container">
        <div className="project-mockups-container-wrapper">
            <div className="project-mockups-container">
                <img className="project-mockups" src={props.imgURL} alt="StreamHub Website Mockup"/>
                <div className="project-item-icons-container">
                    <div className="project-item-icons-buttons">
                        <div 
                        className="project-item-icons-buttons-code">
                        <FontAwesomeIcon icon={faCode} size="1x"/>
                        </div>
                        <div 
                        className="project-item-icons-buttons-link">
                        <FontAwesomeIcon icon={faLink} size="1x"/>
                        </div>                                
                    </div>
                </div>
            </div>
        </div>
        {ItemModal}
    </div>
  );
}

export default ProjectsItem;

