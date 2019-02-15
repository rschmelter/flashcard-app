import React, { Component } from 'react';


class Deck extends Component {
  render() {

    return (
    
      
        <div className="Deck">
            <h2>{this.props.deck}</h2>
        </div>

    );
  }
}

export default Deck;