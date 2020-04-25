import React from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/App.scss";
import fetchData from "../data/FetchData";
import Filters from "./app-components/Filters";
import CharacterList from "./app-components/CharacterList";
import CharacterDetail from "./app-components/CharacterDetail";
import Header from "./app-components/Header";
import Reset from "./app-components/Reset";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.inputHandler = this.inputHandler.bind(this);
    this.renderDetails = this.renderDetails.bind(this);
    this.handleList = this.handleList.bind(this);
    this.resetHandler = this.resetHandler.bind(this);

    this.state = {
      characterList: [],
      inputValue: "",
    };
  }

  resetHandler() {
    localStorage.clear();
    window.location.reload();
  }

  inputHandler(inputVal) {
    this.setState({
      inputValue: inputVal,
    });
    this.handleList(inputVal);
  }

  handleList(inputVal) {
    const updatedList = this.state.characterList.filter((item) => {
      return item.name.toLowerCase().includes(inputVal.toLowerCase());
    });
    this.setState((prevState) => {
      return { ...prevState, characterList: updatedList };
    });

    console.log("value: ", inputVal);
    console.log("check: ", ...updatedList);
  }

  renderDetails(props) {
    const routeId = parseInt(props.match.params.id);
    const characterList = this.state.characterList;

    for (let character of characterList) {
      if (character.id === routeId) {
        return <CharacterDetail charObj={character} />;
      }
    }
  }

  componentDidUpdate() {
    localStorage.setItem("inputValue", JSON.stringify(this.state.inputValue));
    localStorage.setItem("charList", JSON.stringify(this.state.characterList));
  }

  componentDidMount() {
    const list = JSON.parse(localStorage.getItem("charList"));
    const value = JSON.parse(localStorage.getItem("inputValue"));

    if (
      localStorage.getItem("charList") &&
      localStorage.getItem("inputValue")
    ) {
      this.setState({
        characterList: list,
        inputValue: value,
      });
    } else {
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
  }

  render() {
    const { characterList, inputValue } = this.state;
    return (
      <div className="app">
        <Switch>
          <Route path="/">
            <Header />
            <Filters inputHandler={this.inputHandler} inputValue={inputValue} />
            <Reset resetHandler={this.resetHandler} />
            <CharacterList
              chars={characterList}
              inputValue={inputValue}
              inputHandler={this.inputHandler}
              handleList={this.handleList}
            />
          </Route>
          <Route path="/detail/:id" render={this.renderDetails}></Route>
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  inputValue: PropTypes.string,
};

export default App;
