import React from "react";
import "../stylesheets/Landing.scss";

const Landing = () => {
  return (
    <div className="sky column">
      {/* <button type="button" className="landingButton">
        Enter
      </button> */}
      <div className="stars row">
        <div className="rick column">
          <div className="rick-hair"></div>
          <div className="rick-head column">
            <button className="eyebrow">Enter</button>
            <div className="eyes row">
              <div className="eye--right"></div>
              <div className="nose"></div>
              <div className="eye--left"></div>
            </div>
            <div className="mouth"></div>
          </div>
          <div className="rick-body row">
            <div className="arm arm--right">
              <div className="rayGun"></div>
            </div>
            <div className="torso">
              <div className="labCoat row">
                <div className="labCoat-side labCoat--right"></div>
                <div className="labCoat-opening"></div>
                <div className="labCoat-side labCoat--left"></div>
              </div>
            </div>
            <div className="arm arm--left"></div>
          </div>
          <div className="rick-belt row"></div>
          <div className="rick-legs row">
            <div className="rickLeg--right column">
              <div className="sock"></div>
              <div className="shoe"></div>
            </div>
            <div className="rickLeg--left column">
              <div className="sock"></div>
              <div className="shoe"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="ground"></div>
    </div>
  );
};

export default Landing;
