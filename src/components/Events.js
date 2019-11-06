import React from 'react';
import RSVPButton from './RSVPButton.js';
import { SoldOutMessage } from './Messages.js';
import MoreInfoButton from './MoreInfoButton.js';

const Events = (props) => {
  return (
    <div className="events">
      <div className="events__header">
        <h3 className="events__title">{props.event.title}</h3>
        {props.event.soldOut && <SoldOutMessage />}
        <img src={props.event.imagePath}
          className="events__image"
          />
      </div>
      <div className="events__abstract">
        <p className="events__abstract__directions">
          Date: {props.event.date}<br />
          Time: {props.event.startTime} - {props.event.endTime}<br />
          Price: {props.event.price}<br />
          Place: {props.event.place} 
        </p>
        <p className="events__abstract__details">
          We will gather at {props.event.gatherTime} and depart at {props.event.departTime} sharp.<br />
          Due to safety concerns in regards to possible attacks by supernatural forces, we will limit the number of participants to <em>{props.event.capacity} people</em>.
        </p>
      </div>
      <div className="events__buttons">
        <RSVPButton />
        <MoreInfoButton eventIndex={props.eventIndex} />
      </div>
    </div>
  )
};

export default Events;