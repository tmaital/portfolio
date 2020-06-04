import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

function ScrollRedirect(props) {
  const [scrollState, setScrollState] = useState(0)

  useEffect(() => {
    window.addEventListener("wheel", event => handleScroll(event))
  }, [])

  const handleScroll = (event) => {
    setScrollState(Math.sign(event.deltaY))
    window.removeEventListener("wheel", event => handleScroll(event))
  }

  return (
    <div className="scroll-redirect">
      {scrollState && scrollState === 1 ? <Redirect to={props.forward} /> : null}
      {scrollState && scrollState === -1 ? <Redirect to={props.back} /> : null}
    </div>
  );
}

export default ScrollRedirect;
