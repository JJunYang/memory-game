import React, { Component } from "react";
import "./card.css";
export default class Card extends Component {

  render() {
    return (
      <div
        className="d-flex col-2 cardsmap"
        onClick={() => this.props.onClick(this.props.index)}
      >
        {this.props.status === 'visible' ? "?" : this.props.card}
      </div>
    );
  }
}

// const Card = ({ card, status, onClick, index }) => (
//   <div
//     className="d-flex col-2 cardsmap"
//     onClick={() => onClick(index)}
//   >
//     {status === "visible" ? "?" : card}
//   </div>
// );

// export default Card;
