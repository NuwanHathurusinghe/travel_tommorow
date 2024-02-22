import React, { useState } from 'react';
import './NavigationBar.css';
import image from '../../statics/user.png'
import logo from '../../statics/Logo1.png'
import LoginForm from '../Login/LoginForm';

const NavigationBar = (props) => {
  const [login,Setlogin] = useState(false)

  function showLogin(){
    const body = document.getElementById("body")
    if (login){
      Setlogin(false)
      body.style.overflow="scroll"
    }else {
      Setlogin(true)
      body.style.overflow="hidden"
     }
    

  }
  return (
    <>
    <div className="navbar" style={{background:props.backgroundColor}} >
      <img src={logo} id='logo'></img>
      <ul id='NavigationLinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#locations">Locations</a></li>
        <li><a href="#hotels">Hotels</a></li>
        <li><a href="#login-register" onClick={showLogin}>Login</a></li>
        <li className="profile-icon"><img src={image}/></li>
      </ul>
    </div>
    {login?<LoginForm/>:<div></div>}
      
    </>
  );
}

export default NavigationBar;

