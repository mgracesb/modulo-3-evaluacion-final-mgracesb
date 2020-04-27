import React from "react";

const Options = (props) => {
  const getValue = (evt) => {
    const value = evt.currentTarget.value;
    props.handleSelect(value);
  };

  return (
    <select className="select" onChange={getValue}>
      <option>Choose</option>
      <option value="Genderless">Genderless</option>
      <option value="Female">Female</option>
      <option value="Male">Male</option>
      <option value="unknown">Unknown</option>
    </select>
  );
};

export default Options;
