import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardList from '../containers/CardList'

class DeckShow extends Component {
  render() {

    return (
    
      
        <div className="Deck">
            <CardList deckId={this.props.match.params.id}/>
        </div>

    );
  }
}

export default DeckShow;
