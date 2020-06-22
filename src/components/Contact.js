// IMPORT DEPS
import React, { useEffect, useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import ReactTooltip from "react-tooltip"

// IMPORT COMPONENTS
import BottomButton from "./BottomButton";
import ScrollRedirect from "./ScrollRedirect";

// FUNC COMPONENT
function Contact(props) {

  useEffect(() => {
    props.setPage("contact");
  }, []);


  // STATES
  const [showEmail, setShowEmail] = useState(null)
  const [showLinkedin, setShowLinkedin] = useState(null)
  const [showPhone, setShowPhone] = useState(null)
  const [isCopied, setIsCopied] = useState(null)


  // EMAIL FUNCTIONS
  const handleClickEmail = () => {
    if (showEmail) {
      setShowEmail(null)
    } else {
      setShowEmail(true)
      setShowLinkedin(null)
      setShowPhone(null)
    }
  }

  const handleEmail = () => {
    window.location = "mailto: tal@tmaital.com"
  }

  // LINKEDIN FUNCTIONS
  const handleClickLinkedin = () => {
    if (showLinkedin) {
      setShowLinkedin(null)
    } else {
      setShowEmail(null)
      setShowLinkedin(true)
      setShowPhone(null)
    }
  }

  const handleLinkedin = () => {
    window.open('https://www.linkedin.com/in/talmaital', '_blank');
  }

  // PHONE FUNCTIONS
  const handleClickPhone = () => {
    if (showPhone) {
      setShowPhone(null)
    } else {
      setShowEmail(null)
      setShowLinkedin(null)
      setShowPhone(true)
    }
  }

  const handlePhone = () => {
    window.location = "tel:+972522927322"
  }

  // COPY FUNCTIONS
  const handleCopy = () => {

      // if (showEmail){
      //   navigator.clipboard.writeText("tal@tmaital.com")
      // } else if (showLinkedin){
      //   navigator.clipboard.writeText("www.linkedin.com/in/talmaital")
      // } else if(showPhone) {
      //   navigator.clipboard.writeText("+972522927322")
      // }
      setIsCopied(true)
      setTimeout(() => {setIsCopied(null)},3000)
  }

  // CONDITIONAL ELEMENTS
  const emailPopUp = 
    <div className="contact-popup">
      <div className="contact-popup-title">    
        <h3 data-tip="Click to Copy" onClick={handleCopy}>tal@tmaital.com</h3>
        {isCopied ? null : <ReactTooltip effect="solid" delayShow={100} place="bottom" backgroundColor="black" className="contact-tooltip"/>}
      </div>
      <div className="contact-popup-action" onClick={handleEmail}>
        Email
      </div>
    </div>

  const linkedinPopUp = 
    <div className="contact-popup">
      <div className="contact-popup-title">
        <h3 data-tip="Click to Copy" onClick={handleCopy}>linkedin.com/in/talmaital</h3>
        {isCopied ? null : <ReactTooltip effect="solid" delayShow={100} place="bottom" backgroundColor="black" className="contact-tooltip"/>}
      </div>
      <div className="contact-popup-action" onClick={handleLinkedin}>
        View
      </div>
    </div>

  const phonePopUp = 
  <div className="contact-popup">
    <div className="contact-popup-title">    
      <h3 data-tip="Click to Copy" onClick={handleCopy}>+972-(0)52-292-6522</h3>
      {isCopied ? null : <ReactTooltip effect="solid" delayShow={100} place="bottom" backgroundColor="black" className="contact-tooltip"/>}
    </div>
    <div className="contact-popup-action" onClick={handlePhone}>
        Call
    </div>
  </div>

  const copiedNotification = 
  <div className="contact-copy-notification">
    Copied to Clipboard!
  </div>

  // JSX
  return (
    <div className="contact-container">
      <div className="contact-items" >
        <h2 className="contact-items-subtitle">Get in touch</h2>
        <h2 className="contact-items-title">Lets work together</h2>
        <div className="contact-items-buttons">
          <div className="contact-items-email" onClick={handleClickEmail}>
            <FontAwesomeIcon icon={faEnvelope}/>
          </div>
          {showEmail ? emailPopUp : null}
          <div className="contact-items-linkedin" onClick={handleClickLinkedin}>
            <FontAwesomeIcon icon={faLinkedinIn}/>
          </div>
          {showLinkedin ? linkedinPopUp : null}
          <div className="contact-items-phone" onClick={handleClickPhone}>
            <FontAwesomeIcon icon={faPhone}/>
          </div>
          {showPhone ? phonePopUp : null}
        </div>
      </div>
      <BottomButton link="home" title="Home"/>
      {isCopied ? copiedNotification : null}
      <ScrollRedirect back="/about" forward="/home"/>
    </div>
  );
}

export default Contact;
