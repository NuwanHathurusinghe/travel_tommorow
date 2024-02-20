import React from 'react'
import data from '../../Tiledata.js'
import '../Tiles/Tiles.css'

const DestinationsTile=({title,description,imageUrl})=>{
  return(
      <div className="destination-tile-container">
        
        <div className="destination">
        {data.map(item=>(
            <div key={item.id} className="tiled">
              <h3 className='destination-title'>{item.title}</h3>
              <div className='destination-img-container'><img src={item.imageURL} className="destination-img"/></div>
              <div className='destination-tile-description'>
              <p className='destination-tile-description-text'>{item.description}</p></div>
            </div>))}
        </div>       
      </div>
    
  )
}
export default DestinationsTile ;