import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pokedex from './Components/Pokedex/Pokedex'
import Life from './Components/GameOfLife/Life'
import Home from './Components/Home/Home'
import Nav from './Components/Nav/Nav'
import {Switch, Route, Link} from 'react-router-dom'
class App extends Component {
  render() {
    return (
        <section> 
        <Nav/>
        <Switch>
          <Route component={Home} exact path='/'></Route>
          <Route component={Life} path='/GameOfLife'></Route>
          <Route component={Pokedex} path='/Pokedex'></Route>
        </Switch>
        </section>   
    );
  }
}

export default App;
