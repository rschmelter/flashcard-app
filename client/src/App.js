import React, { Component } from 'react';

import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Start from './containers/start';
import Home from './components/home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Start}/>
          <Route exact path="/home" component={Home}/>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
