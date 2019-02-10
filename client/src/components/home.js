import React, { Component } from 'react';
import DeckForm from '../containers/DeckForm'

class Home extends Component {
  render() {
   
    return (
      
        <div className="Home">
          {sessionStorage.getItem('user')}
            <h1>Hello</h1>
            <DeckForm/>
        </div>

    );
  }
}

export default Home;