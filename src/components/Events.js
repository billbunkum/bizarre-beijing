import React from 'react';
import RSVPButton from './RSVPButton.js';
import Messages from './Messages.js';
import MoreInfoButton from './MoreInfoButton.js';

const Events = (props) => {
  return (
    <div className="upcoming-event">
      <div className="upcoming-event__header">
        <h3 className="upcoming-event__title">{props.event.title}</h3>
        {props.event.soldOut && <Messages />}
        <img src={props.event.imagePath}
          className="upcoming-event__image"
          />
      </div>
      <div className="upcoming-event__abstract">
        <p className="upcoming-event__abstract__directions">
          Date: {props.event.date}<br />
          Time: {props.event.startTime} - {props.event.endTime}<br />
          Price: {props.event.price}<br />
          Place: {props.event.place} 
        </p>
        <p className="upcoming-event__abstract__details">
          We will gather at {props.event.gatherTime} and depart at {props.event.departTime} sharp.<br />
          Due to safety concerns in regards to possible attacks by supernatural forces, we will limit the number of participants to <em>{props.event.capacity} people</em>.
        </p>
      </div>
      <div className="upcoming-event__buttons">
        <RSVPButton />
        <MoreInfoButton eventIndex={props.eventIndex} />
      </div>
    </div>
  )
};

export default Events;