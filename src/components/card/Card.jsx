import React from 'react'
import './card.css'
function Card(props) {
  return (
    <div className="card slide">
  <img src={props.imgLink} alt="Avatar" id='img'/>
  <div className="container">
  </div>
</div>
  ) 
}

export default Card