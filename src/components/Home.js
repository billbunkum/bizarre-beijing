import React from 'react';
import UpcomingEvent from './UpcomingEvent.js';
import Notice from './Notice.js';

class Home extends React.Component {
  render() {
    return (
      <div>
        <UpcomingEvent />
        <Notice />
      </div>
    );
  };
};

export default Home;