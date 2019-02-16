import React, { Component } from 'react';


class Deck extends Component {
  render() {

    return (
    
      
        <div className="Deck">

            <h1>{this.props.front}</h1>
            <h1>{this.props.back}</h1>
        </div>

    );
  }
}

export default Deck;