import React from 'react';

// PLAYGROUND

const Events = () => {
  const eventDetails = {
    capacity: 18,
    date: "October 18, 2019",
    endTime: "9:00pm",
    imagePath: "/img/xuanwumen_church.png",
    price: "¥280",
    place: "Xuanwumen (in front of Xuanwumen Catholic Church)",
    startTime: "6:30pm",
    title: "October 18th Haunt Tour"
  };

  return (
    <div className="upcoming-event">
      <div className="upcoming-event__header">
        <h3 className="upcoming-event__title">{eventDetails.title}</h3>
        {this.props.soldOut && <p><Messages /></p>}
        <img src={eventDetails.imagePath}
          className="upcoming-event__image"
          />
      </div>
      <div className="upcoming-event__abstract">
        <p className="upcoming-event__abstract__directions">
          Date: {eventDetails.date}<br />
          Time: {eventDetails.startTime} - {eventDetails.endTime}<br />
          Price: {eventDetails.price}<br />
          Place: {eventDetails.place} 
        </p>
        <p className="upcoming-event__abstract__details">
          We will gather at 6:15 and depart at 6:30 sharp.<br />
          Due to safety concerns in regards to possible attacks by supernatural forces, we will limit the number of participants to <em>{eventDetails.capacity} people</em>.
        </p>
      </div>
    </div>
  )
};

export default Events;