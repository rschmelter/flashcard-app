import React, { Component } from 'react';

import {BrowserRouter, Switch, Redirect, Link, Route} from 'react-router-dom';
import './App.css';
import Start from './containers/start';
import Home from './components/home';
import DeckShow from './components/DeckShow';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Switch id="routes">
          <Route exact path="/" component={Start}/>
          <Route exact path="/home" component={ () => loggedIn() ? <Home/> : <Redirect to="/"/>}/>
          <Route path="/decks/:id" component={DeckShow}/>
          <Route path="/logout" component={() => logout()}/>
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const loggedIn = () => !!sessionStorage['user']

const logout = () => {
  if(sessionStorage['user']) sessionStorage.removeItem('user')
  return <Redirect to="/"/>
}

export default App;
