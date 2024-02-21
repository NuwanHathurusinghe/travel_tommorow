import React from 'react'
import data from '../../Tiledata2.js'
import '../Tiles/Tiles.css'

const PlacesTile=({title,description,imageUrl})=>{
  return(
      <div className="places-tile-container">
        
        <div className="places">
        {data.map(item=>(
            <div key={item.id} className="tilep">
              <h3 className='places-title'>{item.title}</h3>
              <div className='places-img-container'><img src={item.imageURL} className="destination-img"/></div>
              <div className='places-tile-description'>
              <p className='places-tile-description-text'>{item.description}</p></div>
            </div>))}
        </div>       
      </div>
    

  )
}

export default PlacesTile ;

