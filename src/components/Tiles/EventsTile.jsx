import React from 'react'
import data from '../../Tiledata.js'
import '../Tiles/Tiles.css'

const Events=({title,description,imageUrl})=>{
  return(
      <div className=''>
        <h1>Events</h1>
        <div className=''>
        {data.map(item=>(
            <div key={item.id} className="">
              <h3>{item.title}</h3>
              <img src={item.imageURL} className='img'/>
              <p>{item.description}</p>
            </div>))}
        </div>       
      </div>
    
  )
}
 
export default Events ;