import React from 'react';
import UpcomingEvent from './UpcomingEvent.js';
import PSA from './PSA.js';

class Home extends React.Component {
  state = {
    soldOut: undefined
  };
  
  render() {
    return (
      <div>
        <UpcomingEvent soldOut={ this.state.soldOut }/>
        <PSA />
      </div>
    );
  };
};

export default Home;