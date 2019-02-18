import React, { Component } from 'react';
import SignUp from '../containers/signup';
import Login from '../containers/login';

class Start extends Component {
    render() {
      return (

          <div className="Start">
            <h1>Flashcards</h1>
            <h2>Sign Up</h2>
            <SignUp/>
            <h2>Or Login</h2>
            <Login/>
          </div>

      );
    }
  }
  
  export default Start;