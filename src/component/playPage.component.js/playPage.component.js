import React, { Component } from "react";
import Card from "../card/card.component";

const SIDE = 6;
const SYMBOLS = "🎃🎂🎅🐰🎥🍂👨💪🎓👩🎊🏊👑☪🌱☘☀🏈💘⚽";
export default class PlayPage extends Component {


  generateCards(){
    const result=[];
    const size =SIDE*SIDE;

  }
  
  render() {
    return (
      <div>
        <Card card={SYMBOLS}/>
      </div>
    );
  }
}
