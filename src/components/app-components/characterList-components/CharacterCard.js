import React from "react";

const CharacterCard = (props) => {
  //   console.log("Card:", props);
  return (
    <React.Fragment>
      <img src={props.image} alt={props.name} className="cardImg" />
      <h2 className="cardName">{props.name}</h2>
      <p className="cardSpecies">{props.species}</p>
    </React.Fragment>
  );
};

export default CharacterCard;
