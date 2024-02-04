import React from 'react'
import EventsForm from '../../components/EventForm/EventForm'
import Header from '../../components/header/Header'
import './Events.css'

function Events() {
  return (
    <div id='Events'>
    <Header/>
    <EventsForm/>
    </div>
  )
}

export default Events