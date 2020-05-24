import React, { Component } from "react";
import Card from "../card/card";
import "./playPage.css";

var shuffle = require("lodash.shuffle");
const SIDE = 6;
const SYMBOLS = [
  "🎃",
  "🎂",
  "🎅",
  "🐰",
  "🎥",
  "🍂",
  "👨",
  "💪",
  "🎓",
  "👩",
  "🎊",
  "🏊",
  "👑",
  "☪",
  "🌱",
  "☘",
  "☀",
  "🏈",
  "💘",
  "⚽",
];
export default class PlayPage extends Component {
  state = {
    cards: this.generateCards(),
    selectedItem: [],
    matchedItem: [],
  };

  generateCards() {
    const result = [];
    const size = SIDE * SIDE;
    const cards = shuffle(SYMBOLS);
    while (result.length < size) {
      const card = cards.pop();
      result.push(card, card);
    }
    return shuffle(result);
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
    const { cards, selectedItem, matchedItem } = this.state;
    const match = cards[selectedItem[0]] === cards[index];
    const newPair=[selectedItem[0],index];
    this.setState({selectedItem:newPair});
    if (match) {
      this.setState({
        matchedItem: [...matchedItem, ...newPair]
      });
    }
    // this.setState({ selectedItem: [] });

    setTimeout(() => {
      this.setState({ selectedItem: [] });
      console.log(this.state.matchedItem);
    }, 500);
  };
  checkStatus (index){
    const {matchedItem,selectedItem} = this.state;
    const matched = matchedItem.includes(index);
    if(selectedItem.length<2){
      return matched||index===selectedItem[0]?'visible':'hide'
    }
    if(selectedItem.includes(index)){
      return matched?'justMatch':'justMismatched'
    }
    return matched ? "visible" : "hide";
  };

  render() {
    return (
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
    );
  }
}