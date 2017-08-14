import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
  render(){
    return(
      <section>
        <nav> 
          <div className='link_navbar'>

            <Link to ='/' className='link'>
              <div className='home_link'></div>
            </Link>

            <Link to ='/GameOfLife' className='link'>
              <h2 className='gol_text'>Game Of Life</h2>
              <div className='gol_link' onMouseLeave={(e)=>{
                document.getElementsByClassName('gol_link')[0].classList.remove('link_before')
                document.getElementsByClassName('gol_text')[0].classList.remove('text_display')
                document.getElementsByClassName('gol_link')[0].classList.add('link_after')
                document.getElementsByClassName('gol_text')[0].classList.add('text_hide')
                }} onMouseEnter={(e)=>{
                  document.getElementsByClassName('gol_link')[0].classList.remove('link_after')
                  document.getElementsByClassName('gol_text')[0].classList.remove('text_hide')
                  document.getElementsByClassName('gol_link')[0].classList.add('link_before')
                  document.getElementsByClassName('gol_text')[0].classList.add('text_display')

                }}>
              </div>
            </Link>
              

            <Link to ='/Pokedex' className='link'>
            <h2 className='poke_text'>Pokedex</h2>
              <div className='poke_link' onMouseLeave={(e)=>{
                document.getElementsByClassName('poke_link')[0].classList.remove('link_before')
                document.getElementsByClassName('poke_text')[0].classList.remove('text_display')
                document.getElementsByClassName('poke_link')[0].classList.add('link_after')
                document.getElementsByClassName('poke_text')[0].classList.add('text_hide')
                }} onMouseEnter={(e)=>{
                  document.getElementsByClassName('poke_link')[0].classList.remove('link_after')
                  document.getElementsByClassName('poke_text')[0].classList.remove('text_hide')
                  document.getElementsByClassName('poke_link')[0].classList.add('link_before')
                  document.getElementsByClassName('poke_text')[0].classList.add('text_display')
                }}></div> 
            </Link>
            
          </div>

          <div>

          </div>
        </nav>
      </section>  
    );
  }
}

export default Nav;