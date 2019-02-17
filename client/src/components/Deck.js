import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Deck extends Component {
  render() {

    return (
    
      
        

            <h3 className="Deck"><Link to={`/decks/${this.props.deckId}`}>{this.props.deck}</Link></h3>
        

    );
  }
}

export default Deck;