import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  const { name, image, episode, status, species, origin } = props.charObj;

  return (
    <div className="detailChar">
      <Link to="/" className="closeDetail">
        <i className="fas fa-chevron-left"></i>
        <h5 className="close">return</h5>
      </Link>
      <div className="charObj">
        <img src={image} alt={name} className="detailImg" />
        <h3 className="detailName">{name}</h3>
        <h4 className="subtitle1">Species</h4>
        <p className="detailSpecies">{species}</p>
        <h4 className="subtitle2">Origin</h4>
        <p className="detailOrigin">{origin.name}</p>
        <h4 className="subtitle3">Episodes</h4>
        <p className="detailEp">{episode.length}</p>
        <h4 className="subtitle4">Dead or Alive</h4>
        <div className={status === "Alive" ? "alive" : "dead"}></div>
      </div>
    </div>
  );
};

export default CharacterDetail;
