import React, { Component } from 'react';
import DeckForm from '../containers/DeckForm'
import DeckList from '../containers/DeckList'
import Deck from './Deck'
import Header from './Header'

class Home extends Component {
  render() {
  
   
    return (
    
      
        <div className="Home">
            <Header/>
            <DeckForm/>   
            <DeckList/>                     
            <Deck/>
        </div>

    );
  }
}

export default Home;