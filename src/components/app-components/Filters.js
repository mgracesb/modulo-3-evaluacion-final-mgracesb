import React from "react";

const Filter = (props) => {
  const filterName = (evt) => {
    const inputVal = evt.target.value;
    props.inputHandler(inputVal);
  };
  return (
    <form>
      <input
        value={props.inputValue}
        type="text"
        className="filter"
        placeholder={props.inputValue !== "" ? props.inputValue : "Search"}
        onChange={filterName}
      />
    </form>
  );
};

export default Filter;
