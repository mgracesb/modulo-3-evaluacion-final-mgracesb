import React from "react";
// import { Route, Switch } from "react-router-dom";
import "../stylesheets/App.scss";
import fetchData from "../data/FetchData";
import Filters from "./app-components/Filters";
import CharacterList from "./app-components/CharacterList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.inputHandler = this.inputHandler.bind(this);
    this.state = {
      characterList: [],
      inputValue: "",
      filter: "",
    };
  }

  componentDidMount() {
    fetchData().then(
      (data) => {
        this.setState({ characterList: data.results });
      },
      (error) => {
        this.setState({
          error,
        });
      }
    );
  }

  inputHandler(inputVal) {
    this.setState({ inputValue: inputVal });
    const hello = this.state.characterList;
    hello.map(() =>
      localStorage.setItem(
        "charSearch",
        JSON.stringify(this.state.characterList)
      )
    );
  }

  render() {
    const { characterList, inputValue } = this.state;

    console.log("App: ", characterList);
    return (
      <div className="appContainer">
        <Filters inputHandler={this.inputHandler} />
        <CharacterList
          chars={characterList}
          inputValue={inputValue}
          inputHandler={this.inputHandler}
        />
      </div>
    );
  }
}

export default App;
