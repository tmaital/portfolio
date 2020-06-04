import React, { useState } from "react";
import "./BottomButton.css"
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


function BottomButton(props){

    const [isRedirect, setIsRedirect] = useState(null);
    const [isFadeOut, setIsFadeOut] = useState(null);


    const handleClick = () => {
        setTimeout(()=> {setIsRedirect(true)}, 500)
        setIsFadeOut(true)
      };

    return(
        <div className={`bottom-button-container ${isFadeOut ? "bb-fade-out" : "bb-fade-in"}`} onClick={handleClick}>
            <h2>{props.title}</h2>
            <FontAwesomeIcon icon={faChevronDown} className="bb-down-arrow bb-bounce" size="1x"/>
            {isRedirect ? <Redirect to={`/${props.link}`} /> : null}
        </div>
    )
}

export default BottomButton