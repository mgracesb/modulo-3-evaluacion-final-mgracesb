import React from "react";
import CharacterCard from "./characterList-components/CharacterCard";

const CharacterList = (props) => {
  const { chars, inputValue } = props;
  console.log("List: ", inputValue);
  console.log("List: ", chars);
  return (
    <ul className="charList">
      {chars
        .filter(
          (charObject) =>
            inputValue === "" ||
            charObject.name.toLowerCase().includes(inputValue.toLowerCase())
        )
        .map((charObject) => (
          <li key={charObject.id}>
            <CharacterCard
              image={charObject.image}
              name={charObject.name}
              species={charObject.species}
            />
          </li>
        ))}
    </ul>
  );
};

export default CharacterList;
