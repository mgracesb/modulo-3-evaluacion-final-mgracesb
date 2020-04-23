import React from "react";
import CharacterCard from "./characterList-components/CharacterCard";
import { Link } from "react-router-dom";
import Header from "./Header";
const CharacterList = (props) => {
  const { chars, inputValue } = props;
  console.log("List: ", inputValue);
  console.log("List: ", chars);

  return (
    <React.Fragment>
      <Header />
      <ul className="charList">
        {chars
          .filter(
            (charObject) =>
              inputValue === "" ||
              charObject.name.toLowerCase().includes(inputValue.toLowerCase())
          )
          .map((charObject) => (
            <li key={charObject.id} id={charObject.id}>
              <Link to={`/detail/${charObject.id}`}>
                <CharacterCard
                  image={charObject.image}
                  name={charObject.name}
                  species={charObject.species}
                />
              </Link>
            </li>
          ))}
      </ul>
    </React.Fragment>
  );
};

export default CharacterList;
