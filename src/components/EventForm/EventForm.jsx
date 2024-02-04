import React, { useState } from 'react';
import './EventForm.css';

const EventsForm = () => {
  const [eventDetails, setEventDetails] = useState({
    eventName: '',
    mainCity: '',
    eventLocation: '',
    date: '',
    time: '',
    eventPoster: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission
    console.log('Event details submitted:', eventDetails);
  };

  return (
    <div className="events-form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input
            type="text"
            name="eventName"
            value={eventDetails.eventName}
            onChange={handleChange}
          />
        </label>

        <label>
          Main City:
          <input
            type="text"
            name="mainCity"
            value={eventDetails.mainCity}
            onChange={handleChange}
          />
        </label>

        <label>
          Event Location:
          <input
            type="text"
            name="eventLocation"
            value={eventDetails.eventLocation}
            onChange={handleChange}
          />
        </label>

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={eventDetails.date}
            onChange={handleChange}
          />
        </label>

        <label>
          Time:
          <input
            type="time"
            name="time"
            value={eventDetails.time}
            onChange={handleChange}
          />
        </label>

        <label>
          Event Poster:
          <input
            type="file"
            accept=".jpg, .png"
            name="eventPoster"
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EventsForm;