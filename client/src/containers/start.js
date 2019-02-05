import React, { Component } from 'react';
import SignUp from './signup';
import Login from './login';

class Start extends Component {
    render() {
      return (

          <div className="Start">
            <SignUp/>
            <Login/>
          </div>

      );
    }
  }
  
  export default Start;