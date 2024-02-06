import React from 'react'
import data from '../../Tiledata.js'
import '../Tiles/Tiles.css'

const EventsTile=({title,description,imageUrl})=>{
  return(
      <div className="event-tile-container">
        
        <div className="events">
        {data.map(item=>(
            <div key={item.id} className="tile">
              <h3 className='event-title'>{item.title}</h3>
              <div className='event-img-container'><img src={item.imageURL} className="event-img"/></div>
              <div className='event-tile-description'>
              <p className='event-tile-description-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure dolores quia reprehenderit ex rem maiores! Labore, natus nisi distinctio itaque quibusdam, iste consequuntur nesciunt necessitatibus repudiandae inventore autem suscipit, ea sint dolorem assumenda. Reprehenderit iusto beatae cupiditate quam dolor quasi a dignissimos nemo pariatur officiis qui quos maiores totam commodi unde eum quia, odit autem expedita adipisci cum nisi. Reprehenderit at architecto possimus asperiores officia? Rerum vero sapiente, in fugit eaque alias voluptates adipisci sit laborum, magnam consectetur quas. Voluptatum, soluta ipsa! Deserunt eum reprehenderit, quo voluptate minus cumque blanditiis illo dolorum cupiditate, iusto, eos omnis voluptates deleniti ratione.</p></div>
            </div>))}
        </div>       
      </div>
    
  )
}
 
export default EventsTile ;