import React, { Component } from 'react';
import DeckForm from '../containers/DeckForm'
import DeckList from '../containers/DeckList'
import Deck from './Deck'

class Home extends Component {
  render() {
   
    return (
    
      
        <div className="Home">
          
            <h1>Hello</h1>
            <DeckForm/>
            <DeckList/>
            <Deck/>
        </div>

    );
  }
}

export default Home;