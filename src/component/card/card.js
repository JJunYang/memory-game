import React, { Component } from "react";
import "./card.css";
export default class Card extends Component {
  render() {
    return (
      <div
        className={`cardsmap ${this.props.status}`}
        onClick={() => this.props.onClick(this.props.index)}
      >
        {this.props.status === "hide" ? "?" : this.props.card}
      </div>
    );
  }
}