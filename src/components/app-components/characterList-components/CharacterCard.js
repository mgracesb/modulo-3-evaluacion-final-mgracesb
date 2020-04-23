import React from "react";

const CharacterCard = (props) => {
  //   console.log("Card:", props);
  return (
    <React.Fragment>
      <img src={props.image} alt={props.name} className="" />
      <h2>{props.name}</h2>
      <p className="species">{props.species}</p>
    </React.Fragment>
  );
};

export default CharacterCard;
