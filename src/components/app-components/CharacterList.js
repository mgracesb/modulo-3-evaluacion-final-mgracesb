import React from "react";
import CharacterCard from "./characterList-components/CharacterCard";
import { Link } from "react-router-dom";

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
          <li key={charObject.id} id={charObject.id} className="charLi">
            <Link to={`/detail/${charObject.id}`}>
              <CharacterCard
                image={charObject.image}
                name={charObject.name}
                species={charObject.species}
                id={charObject.id}
              />
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default CharacterList;
