import React from "react";

const Filter = (props) => {
  const filterName = (evt) => {
    const inputVal = evt.currentTarget.value;
    props.inputHandler(inputVal);
  };
  return (
    <form className="form">
      <input
        value={props.inputValue}
        type="text"
        className="filter"
        placeholder={props.inputValue === "" ? "Search" : `${props.inputValue}`}
        onChange={filterName}
      />
    </form>
  );
};

export default Filter;
