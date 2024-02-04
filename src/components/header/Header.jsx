import React from 'react'
import './header.css'
import Card from '../card/Card'
import {data} from '../../data'
import logo from '../../statics/Logo1.png'
import NavigationBar from '../Navigation Bar/NavigationBar'

function Header() {
  return (
    <nav id='header'>
      {/* {data?.map((person)=>(<Card name={person.name} profession ={person.porfession}/>))} */}
      <NavigationBar/>
      <img src={logo} id='logo'></img>
      </nav>
  )
}

export default Header