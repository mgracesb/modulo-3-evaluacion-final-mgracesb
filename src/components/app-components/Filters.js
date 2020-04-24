import React from "react";

const Filter = (props) => {
  const filterName = (evt) => {
    evt.preventDefault();
    const inputVal = evt.target.value;
    props.inputHandler(inputVal);
  };
  return (
    <form className="form">
      <input
        value={props.inputValue}
        type="text"
        className="filter"
        placeholder="Search"
        onChange={filterName}
      />
    </form>
  );
};

export default Filter;
