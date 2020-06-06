import React, { Component } from "react";
import Card from "../card/card";
import "./playPage.css";
import { Symbols } from "../../data/symbols";
import Navbar from "../navbar/navbar";

var shuffle = require("lodash.shuffle");
const SYMBOLS = Symbols;
export default class PlayPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      selectedItem: [],
      matchedItem: [],
      tryNum: 0,
      size: 36,
    };
  }
  componentDidMount() {
    this.generateCards(this.state.size);
  }
  generateCards(SIZE) {
    const result = [];
    // const size = SIDE * SIDE;
    const cards = shuffle(SYMBOLS);
    while (result.length < SIZE) {
      const card = cards.pop();
      result.push(card, card);
    }
    this.setState({ cards: shuffle(result) });
  }
  handleClick = (index) => {
    const { selectedItem } = this.state;

    if (selectedItem.length === 2) {
      console.log("something wrong");
      return;
    }
    if (selectedItem.length === 0) {
      this.setState({ selectedItem: [index] });
      return;
    }
    this.handleNewPair(index);
  };
  handleNewPair = (index) => {
    const { cards, selectedItem, matchedItem, tryNum } = this.state;
    if (index === selectedItem[0]) {
      return;
    }
    if (matchedItem.includes(index)) {
      return;
    }
    const match = cards[selectedItem[0]] === cards[index];
    const newPair = [selectedItem[0], index];
    this.setState({ selectedItem: newPair });
    if (match) {
      this.setState({
        matchedItem: [...matchedItem, ...newPair],
      });
    }

    setTimeout(() => {
      this.setState({ selectedItem: [], tryNum: tryNum + 1 });
      // console.log(this.state.matchedItem);
    }, 300);
  };
  checkStatus(index) {
    const { matchedItem, selectedItem } = this.state;
    const matched = matchedItem.includes(index);
    if (selectedItem.length < 2) {
      return matched || index === selectedItem[0] ? "visible" : "hide";
    }
    if (selectedItem.includes(index)) {
      return matched ? "Match" : "misMatch";
    }
    return matched ? "visible" : "hide";
  }

  clickNewGame = async () => {
    await this.setState({
      selectedItem: [],
      matchedItem: [],
      tryNum: 0,
    });
    this.generateCards(this.state.size);
  };
  clickHardBtn = async () => {
    await this.setState({
      selectedItem: [],
      matchedItem: [],
      size: 36,
      tryNum: 0,
    });
    this.generateCards(this.state.size);
    var hardBtn = document.getElementById("hardBtn");
    var easyBtn = document.getElementById("easyBtn");
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
  };
  clickEasyBtn = async () => {
    await this.setState({
      selectedItem: [],
      matchedItem: [],
      size: 24,
      tryNum: 0,
    });
    this.generateCards(this.state.size);
    var hardBtn = document.getElementById("hardBtn");
    var easyBtn = document.getElementById("easyBtn");
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
  };

  render() {
    return (
      <>
        <h1>Try Your Best To Remember</h1>
        <Navbar
          num={this.state.tryNum}
          clickNewGame={this.clickNewGame}
          clickHardBtn={this.clickHardBtn}
          clickEasyBtn={this.clickEasyBtn}
        />
        <div className="row">
          {this.state.cards.map((card, i) => (
            <Card
              key={i}
              card={card}
              index={i}
              status={this.checkStatus(i)}
              onClick={this.handleClick}
            />
          ))}
        </div>
        {this.state.matchedItem.length === this.state.size ? (
          <div className="alert alert-success">
            You Make it ! Total Steps: {this.state.tryNum}{" "}
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}
