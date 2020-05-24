import React, { Component } from 'react'

export default class Card extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                {this.props.card}
            </div>
        )
    }
}