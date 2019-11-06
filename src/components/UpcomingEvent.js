import React from 'react';
import Events from './Events.js';

class UpcomingEvent extends React.Component { 
  render() {
    // console.log('here',this.props.events)
    
    return (
      <div> 
        <div className="upcoming-event__title-spacer">
          <h2>Upcoming Events</h2>
        </div>
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

      </div>  
    )
  };
};

export default UpcomingEvent;