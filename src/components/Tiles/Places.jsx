import React from 'react'
import './Tiles.css'
function Places(props) {
  return (
    <div className="card slide">
  <img src={props.imgLink} alt="Avatar" id='img'/>
  <div className="container">
  </div>
</div>
  )
}

export default Places