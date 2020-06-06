import React, { Component } from "react";
import "./navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div id="nav">
        <button id="new" onClick={() => this.props.clickNewGame()}>
          New Game
        </button>
        <span id="message">TryNum : {this.props.num}</span>
        <button id="easyBtn" onClick={() => this.props.clickEasyBtn()}>
          Easy
        </button>
        <button
          id="hardBtn"
          className="selected"
          onClick={() => this.props.clickHardBtn()}
        >
          Hard
        </button>
      </div>
    );
  }
}
