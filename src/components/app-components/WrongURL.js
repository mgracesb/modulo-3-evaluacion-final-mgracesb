import React from "react";
import warning from "../../images/warning.svg";
import "../../stylesheets/WrongURL.scss";
import { Link } from "react-router-dom";

const WrongURL = () => {
  return (
    <div className="wrongURL">
      <Link to="/" className="closeDetail">
        <i className="fas fa-chevron-left"></i>
        <h5 className="close">Return</h5>
      </Link>
      <img src={warning} alt="not found" className="warningImg" />
      <p className="warningText">"El personaje que buscas no existe"</p>
    </div>
  );
};

export default WrongURL;
