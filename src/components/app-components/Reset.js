import React from "react";

const Reset = (props) => {
  const reset = () => {
    props.resetHandler();
  };
  return <span className="resetBox" onClick={reset}></span>;
};

export default Reset;
