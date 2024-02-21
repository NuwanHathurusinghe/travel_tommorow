import React from 'react'

import Header from '../../components/header/Header';
import DestinationsTile from '../../components/Tiles/DestinationTile';
import PlacesTile from '../../components/Tiles/PlacesTile';
import EventsTile from '../../components/Tiles/EventsTile';



function Explorer() {
  return (
    <div>
      <Header backgrounColor={"black"}/>
      <h1>Events</h1>
      <EventsTile/>
      <h1>Destinations</h1>
      <DestinationsTile/>
      <h1>Places</h1>
      <PlacesTile/>
      
    </div>
  )
}

export default Explorer











