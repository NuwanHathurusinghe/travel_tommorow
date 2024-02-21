import React from 'react'
import data from '../../Tiledata3.js'
import '../Tiles/Tiles.css'

const EventsTile=({title,description,imageUrl})=>{
  return(
      <div className="event-tile-container">
        
        <div className="events">
        {data.map(item=>(
            <div key={item.id} className="tile">
              <h3 className='event-title'>{item.title}</h3>
              <div className='event-img-container'><img src={item.imageURL} className="event-img"/></div>
            </div>))}
        </div>       
      </div>
    
  )
}
 
export default EventsTile ;