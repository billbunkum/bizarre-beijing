import React from 'react';
import Events from './Events.js';

class UpcomingEvent extends React.Component { 
  render() {
    console.log('here',this.props.events)
    
    return (
      <div className="main-content"> 
        <h2>Upcoming Events</h2>
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