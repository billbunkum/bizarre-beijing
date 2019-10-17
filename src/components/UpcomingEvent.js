import React from 'react';
import Events from './Events.js';
import Messages from './Messages.js';
import MoreInfoButton from './MoreInfoButton.js';
import RSVPButton from './RSVPButton.js';

class UpcomingEvent extends React.Component { 
  render() {
    const event = [
      {
        capacity: 18,
        date: "October 18, 2019",
        endTime: "9:00pm",
        imagePath: "/img/xuanwumen_church.png",
        price: "¥280",
        place: "Xuanwumen (in front of Xuanwumen Catholic Church)",
        soldOut: true,
        startTime: "6:30pm",
        title: "October 18th Haunt Tour"
      },
      {
        capacity: 18,
        date: "October 26, 2019",
        endTime: "9:00pm",
        imagePath: "/img/xuanwumen_church2.jpg",
        price: "¥280",
        place: "Xuanwumen (in front of Xuanwumen Catholic Church)",
        soldOut: true,
        startTime: "6:30pm",
        title: "October 26th Haunt Tour"
      }
    ];
    return (
      <div className="main-content">
        <h2>Upcoming Events</h2>

{/* START GENERATING EVENTS HERE */}

        <div className="upcoming-event">
          <div className="upcoming-event__header">
            <h3 className="upcoming-event__title">{event[0].title}</h3>
            {this.props.soldOut && <p><Messages /></p>}
            <img src={event[0].imagePath}
              className="upcoming-event__image"
              />
          </div>
          <div className="upcoming-event__abstract">
            <p className="upcoming-event__abstract__directions">
              Date: {event[0].date}<br />
              Time: {event[0].startTime} - {event[0].endTime}<br />
              Price: {event[0].price}<br />
              Place: {event[0].place} 
            </p>
            <p className="upcoming-event__abstract__details">
              We will gather at 6:15 and depart at 6:30 sharp.<br />
              Due to safety concerns in regards to possible attacks by supernatural forces, we will limit the number of participants to <em>{event[0].capacity} people</em>.
            </p>
          </div>
          <div className="upcoming-event__buttons">
              <RSVPButton />
              <MoreInfoButton />
          </div>
        </div>

      </div>
    )
  };
};

export default UpcomingEvent;