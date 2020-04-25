import React from "react";

const Filter = (props) => {
  const filterName = (evt) => {
    evt.preventDefault();
    const inputVal = evt.currentTarget.value;
    props.inputHandler(inputVal);
  };
  return (
    <form className="form">
      <input
        name="filter"
        type="text"
        className="filter"
        value={props.inputValue}
        placeholder={props.inputValue === "" ? "Search" : `${props.inputValue}`}
        onChange={filterName}
      />
    </form>
  );
};

export default Filter;
