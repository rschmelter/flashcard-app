import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Deck extends Component {
  render() {

    return (
    
      
        <div className="Deck">
            <h2>{this.props.deckId}</h2>
            <h2>{this.props.deck}</h2>
            <Link to={`/decks/${this.props.deckId}`}><h2>{this.props.deck}</h2></Link>
        </div>

    );
  }
}

export default Deck;