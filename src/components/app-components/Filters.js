import React from "react";

const Filter = (props) => {
  const filterName = (evt) => {
    const inputVal = evt.target.value;
    props.inputHandler(inputVal);
  };
  return (
    <form>
      <input
        type="text"
        className="filter"
        placeholder="Search"
        onChange={filterName}
      />
    </form>
  );
};

export default Filter;
