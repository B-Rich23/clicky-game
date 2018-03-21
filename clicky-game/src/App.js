import React, { Component } from "react";
import MarvelCard from "./components/MarvelCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import marvel from "./marvel.json";
import "./App.css";

class App extends Component {
  // Setting this.state.marvel to the marvel json array
  state = {
    marvel,
    score: 0,
    highscore: 0
  };

  selectCard= id => {
    // Filter this.state.marvel for marvel with an id not equal to the id being removed
    const marvel = this.state.marvel.filter(marvel => marvel.id !== id);
    // Set this.state.marvel equal to the new marvel array
    this.setState({ marvel });
  };

  // Map over this.state.marvel and render a MarvelCard component for each marvel object
  render() {
    return (
      <Wrapper>
        <Header>Marvel List</Header>
        {this.state.marvel.map(marvel => (
          <MarvelCard
            id={marvel.id}
            key={marvel.id}
            name={marvel.name}
            image={marvel.image}
            selected={marvel.selected}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
