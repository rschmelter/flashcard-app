import React, { Component } from 'react';


class Deck extends Component {
  render() {

    return (
    
      
        <div className="Deck">
            {this.props.deck}
        </div>

    );
  }
}

export default Deck;