import React from 'react';
import Events from './Events.js';

class UpcomingEvent extends React.Component { 
  render() {
    return (
      <div className="main-content">
        <h2>Upcoming Events</h2>
{/* START GENERATING EVENTS HERE */}
        {
          this.props.events.map((event, index) => {
            return (
              <Events key={index} 
                event={event}
                eventIndex={index}
              />
            );
          })
        }
{/* END GENERATED CONTENT */}
      </div>
    )
  };
};

export default UpcomingEvent;