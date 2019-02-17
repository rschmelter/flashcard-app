import React, { Component } from 'react';
import SignUp from '../containers/signup';
import Login from '../containers/login';

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