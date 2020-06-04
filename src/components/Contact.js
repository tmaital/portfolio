import React, { useEffect, useState } from "react";
import "./Contact.css";
import BottomButton from "./BottomButton";

function Contact(props) {

  useEffect(() => {
    props.setPage("contact");
  }, []);

  return (
    <div className="contact-container">
      <BottomButton link="home" title="Home"/>
    </div>
  );
}

export default Contact;
