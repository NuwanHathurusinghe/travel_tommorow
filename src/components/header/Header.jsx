import React from 'react'
import './header.css'
import logo from '../../statics/Logo1.png'
import NavigationBar from '../Navigation Bar/NavigationBar'

function Header(props) {
  return (
    <nav id='header'>
      <NavigationBar backgroundColor={props.backgrounColor}/>
      
      </nav>
  )
}

export default Header