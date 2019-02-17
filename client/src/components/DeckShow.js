import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardList from '../containers/CardList'
import Card from "./Card"
import CardForm from "../containers/CardForm"

class DeckShow extends Component {
  render() {

    return (
    
      
        <div className="Deck">
            <CardForm deckId={this.props.match.params.id}/>
            <CardList deckId={this.props.match.params.id}/>
            <Card/>
        </div>

    );
  }
}

export default DeckShow;
