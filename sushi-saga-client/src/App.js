import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: [],
    currentSushi: [],
    eaten: [],
    money: 100,
  };

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((allSushi) => {
        this.setState(
          {
            sushi: allSushi,
          },
          this.getNextSushi
        );
      });
  }

  getNextSushi = () => {
    this.setState((prevState) => {
      return {
        sushi: prevState.sushi.slice(4),
        currentSushi: prevState.sushi.slice(0, 4),
      };
    });
  };

  isSushiEaten = (sushi) => {
    return this.state.eaten.includes(sushi);
  };

  eatSushi = (eatenSushi) => {
    if (eatenSushi.price <= this.state.money && !this.isSushiEaten(eatenSushi))
      this.setState((prev) => {
        return {
          eaten: [...prev.eaten, eatenSushi],
          money: prev.money - eatenSushi.price,
        };
      });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          onEatSushi={this.eatSushi}
          currentSushi={this.state.currentSushi}
          onGetNextSushi={this.getNextSushi}
          isSushiEaten={this.isSushiEaten}
        />
        <Table money={this.state.money} eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;
