import React, { Component } from 'react';
import DeckForm from '../containers/DeckForm'
import DeckList from '../containers/DeckList'

class Home extends Component {
  render() {
   
    return (
    
      
        <div className="Home">
          
            <h1>Hello</h1>
            <DeckForm/>
            <DeckList/>
        </div>

    );
  }
}

export default Home;