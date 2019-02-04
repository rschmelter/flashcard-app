import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Start from './containers/start';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Start}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
