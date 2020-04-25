import React from "react";
import warning from "../../images/warning.svg";
import "../../stylesheets/WrongURL.scss";

const Wrong = () => {
  return (
    <div className="wrongURL">
      <img src={warning} alt="not found" className="warningImg" />
      <p className="warningText">"El personaje que buscas no existe"</p>
    </div>
  );
};

export default Wrong;
