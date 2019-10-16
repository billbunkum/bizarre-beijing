import React from 'react';
import MoreInfoButton from './MoreInfoButton.js';
import RSVPButton from './RSVPButton.js';

class UpcomingEvent extends React.Component { 
  render() {
    return (
      <div>
        <h2>Upcoming Events</h2>
        <div className="upcoming-event">
          <h3 className="upcoming-event__title">Friday 13th Haunt Tour</h3>
          <img src="/img/xuanwumen_church.png"
            className="upcoming-event__image"
            />
          <p>Date: September 13, 2019<br />
            Time: 6:00 – 9:00pm<br />
            Price: ¥280<br />
            Place: Xuanwumen (in front of Xuanwumen Catholic Church).</p>
          <p>We will gather at 6:00 and depart at 6:15 sharp.<br />
          Due to safety concerns in regards to possible attacks by supernatural forces, we will limit the number of participants to <em>18 people</em>.</p>
          <div className="upcoming-event__buttons">
            <MoreInfoButton /><RSVPButton />
          </div>
        </div>
      </div>
    )
  };
};

export default UpcomingEvent;