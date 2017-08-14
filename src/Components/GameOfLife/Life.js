import React, { Component } from 'react';
import './Life.css'
import Blocks from './SubComponents/Blocks/Blocks';
class Life extends Component {
  render() {

    return (
    <main className='main'>
      <div className='instructions'>
        <h1> How It Works: </h1>
        <h3> For a space that is 'populated':</h3>
        <ul>
          <li>Each cell with one or no neighbors dies, as if by solitude.</li> 
          <li>Each cell with four or more neighbors dies, as if by overpopulation.</li> 
          <li>Each cell with two or three neighbors survives.</li>   
        </ul>
        <h3> For a space that is 'empty' or 'unpopulated' </h3>
        <ul>
          <li> Each cell with three neighbors becomes populated. </li>
        </ul>
      </div>
      <container className='life_container'> 
        <Blocks />
      </container>
    </main>
    );
  }
}

export default Life;
