import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render(){
    return(
      <page className='welcome_page'>
        <section className='links_section'>
          <ol> Links
            <li><a  target="_blank" href='https://bitstorm.org/gameoflife'>bitstorm.org</a></li>
            <li><a  target="_blank" href='https://pokeapi.co'>pokeapi.co</a></li>
          </ol>
        </section>
        <section className='welcome_section'>
          <h2 className = 'welcome'>Welcome</h2>
          <h4 className = 'navigate'>Use the nav bar to navigate through the different apps.</h4>
        </section>
        <section className='reference_section'>
          <ol> What was used
            <li>HTML</li>
            <li>CSS</li>
            <li>Axios</li>
            <li>React Router</li>
            <li>PokeApi</li>
            <li>John Conway's Game of Life</li>
          </ol>
        </section>
      </page>
    );
  }
}
export default Home