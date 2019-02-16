import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Deck extends Component {
  render() {

    return (
    
      
        <div className="Deck">

            <Link to={`/decks/${this.props.deckId}`}><h2>{this.props.deck}</h2></Link>
        </div>

    );
  }
}

export default Deck;