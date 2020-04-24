import React from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/App.scss";
import fetchData from "../data/FetchData";
import Filters from "./app-components/Filters";
import CharacterList from "./app-components/CharacterList";
import CharacterDetail from "./app-components/CharacterDetail";
import Header from "./app-components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.inputHandler = this.inputHandler.bind(this);
    this.renderDetails = this.renderDetails.bind(this);
    this.handleList = this.handleList.bind(this);
    this.state = {
      characterList: [],
      inputValue: "",
    };
  }

  componentDidUpdate() {
    localStorage.setItem("charList", JSON.stringify(this.state.characterList));
    localStorage.setItem("inputValue", JSON.stringify(this.state.inputValue));
  }

  componentDidMount() {
    const { characterList, inputValue } = this.state;
    const charList = JSON.parse(localStorage.getItem("charList"));
    const value = JSON.parse(localStorage.getItem("inputValue"));

    if (characterList !== [] && inputValue !== "") {
      this.setState = {
        characterList: charList,
        inputValue: value,
      };
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

  inputHandler(inputVal) {
    this.setState({
      inputValue: inputVal,
    });
    this.handleList(inputVal);
  }

  handleList(inputVal) {
    const updatedList = this.state.characterList.filter((item) => {
      return item.name.includes(inputVal) !== 1;
    });
    this.setState((prevState) => {
      return { ...prevState, characterList: updatedList };
    });
    console.log("check: ", this.state.characterList);
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

  render() {
    const { characterList, inputValue } = this.state;
    console.log(this.props.match.params.id);
    console.log("App: ", characterList);
    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Filters inputHandler={this.inputHandler} inputValue={inputValue} />

            <CharacterList
              chars={characterList}
              inputValue={inputValue}
              inputHandler={this.inputHandler}
              handleList={this.handleList}
            />
          </Route>

          <Route
            path="/detail/:id"
            // component={CharacterDetail}
            render={this.renderDetails}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
