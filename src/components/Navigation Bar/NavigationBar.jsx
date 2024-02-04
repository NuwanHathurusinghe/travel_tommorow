import React from 'react';
import './NavigationBar.css';
import image from '../../statics/user.png'

const NavigationBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#locations">Locations</a></li>
        <li><a href="#hotels">Hotels</a></li>
        <li><a href="#login-register">Login/Register</a></li>
        <li className="profile-icon"><a href="#profile"><img src={image} /></a></li>
      </ul>
    </div>
  );
}

export default NavigationBar;

