import React from "react";
import CharacterCard from "./characterList-components/CharacterCard";
import { Link } from "react-router-dom";
import warning1 from "../../images/warning.gif";

const CharacterList = (props) => {
  const { chars, inputValue, gender, rainbow } = props;
  console.log(props);

  const newList = chars
    .filter(
      (charObject) =>
        inputValue === "" ||
        charObject.name.toLowerCase().includes(inputValue.toLowerCase())
    )
    .filter((charObject) => gender === "" || charObject.gender.includes(gender))
    .map((charObject) => {
      return (
        <li key={charObject.id} id={charObject.id} className="charLi">
          <Link to={`/detail/${charObject.id}`}>
            <CharacterCard
              image={charObject.image}
              name={charObject.name}
              species={charObject.species}
              id={charObject.id}
              rainbow={rainbow}
            />
          </Link>
        </li>
      );
    });
  console.log(newList);
  console.log(inputValue);

  return (
    <ul className="charList">
      {!newList.length ? (
        <li className="warning">
          <h6 className="warningText">
            No hay ningún personaje que coincida con la palabra
            <p className="errorWord">{inputValue}</p>
          </h6>
          <img src={warning1} className="warning2" alt="warning2" />
        </li>
      ) : (
        newList
      )}
    </ul>
  );
};

export default CharacterList;
