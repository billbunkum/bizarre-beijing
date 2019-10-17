import React from 'react';
import Events from './Events.js';
import Messages from './Messages.js';
import MoreInfoButton from './MoreInfoButton.js';
import RSVPButton from './RSVPButton.js';

class UpcomingEvent extends React.Component { 

// MAY NEED LOGIC TO DISPLAY events array FROM Events COMPONENT

  render() {
    return (
      <div className="main-content">
        <h2>Upcoming Events</h2>
        <div className="upcoming-event">
          <div className="upcoming-event__header">
            <h3 className="upcoming-event__title">Friday 13th Haunt Tour</h3>
            {this.props.soldOut && <p><Messages /></p>}
            <img src="/img/xuanwumen_church.png"
              className="upcoming-event__image"
              />
          </div>
          <div className="upcoming-event__abstract">
            <p className="upcoming-event__abstract__directions">
              Date: September 13, 2019<br />
              Time: 6:00 – 9:00pm<br />
              Price: ¥280<br />
              Place: Xuanwumen (in front of Xuanwumen Catholic Church).
            </p>
            <p className="upcoming-event__abstract__details">
              We will gather at 6:00 and depart at 6:15 sharp.<br />
              Due to safety concerns in regards to possible attacks by supernatural forces, we will limit the number of participants to <em>18 people</em>.
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