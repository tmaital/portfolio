import React, { useState } from "react";
import "./ProjectItem.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCode } from "@fortawesome/free-solid-svg-icons";
import browserMockup from "./Assets/browser.png"



function ProjectsItem(props) {

    const [showModal, setShowModal] = useState(null)

    const handleClose = (event) => {
        //if(event.target === event.currentTarget) 
        handleHide()
    }

    const handleShow = () => {
        if(!showModal) {
            setShowModal(true)
        }
    }

    const handleHide = () => {
        setShowModal(false)
    }

    const techIcon = props.techUsed.map(item =>
        <img src={item} alt={`Icon from ${item}`} key={item}/>
        )

    const ItemModal = showModal ? <div className="project-modal-container" onClick={handleClose}>
                                    <div className="project-modal-container-window-parent">
                                        <div className="project-modal-container-window">
                                            {/* <div className="project-modal-container-close-button" onClick={handleHide}>
                                                <FontAwesomeIcon icon={faTimes} size="1x"/>
                                            </div> */}
                                            <div className="project-modal-content-browser">
                                                <img className="project-modal-browser" src={browserMockup} alt="Browser Mockup"/>
                                                <img className="project-modal-screenshot" src={props.imgURL} alt={props.title} onClick={handleShow}/>
                                                <p className="project-modal-url-placeholder">{props.webURL}</p>
                                                <div className="project-modal-buttons">
                                                    <div 
                                                    className="project-modal-icons-buttons-code"
                                                    onClick={() => window.open(props.gitURL)}>
                                                    <FontAwesomeIcon icon={faCode} size="1x"/>
                                                    </div>
                                                    <div 
                                                    className="project-modal-icons-buttons-link"
                                                    onClick={() => window.open(props.webURL)}>
                                                    <FontAwesomeIcon icon={faLink} size="1x"/>
                                                </div> 
                                                </div>
                                            </div>
                                            <div className="project-modal-content-info">
                                                <div className="project-modal-content-title">{props.title}</div>
                                                <div className="project-modal-content-icons">{techIcon}</div>
                                                <div className="project-modal-content-description">{props.description}</div>
                                            </div>
                                        </div>
                                    </div>
                                  </div> : null

  return (
    <div className="project-item-container" onClick={handleShow}>
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

