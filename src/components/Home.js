import React from 'react';
import UpcomingEvent from './UpcomingEvent.js';
import PSA from './PSA.js';

class Home extends React.Component {

  render() {

    return (
      <div>
        <UpcomingEvent
          events={ this.props.events }
        />
        <PSA />
      </div>
    );
  };
};

export default Home;