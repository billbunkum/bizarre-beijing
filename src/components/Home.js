import React from 'react';
import { NovDecAnnouncement } from './Messages.js';
import PSA from './PSA.js';
import UpcomingEvent from './UpcomingEvent.js';

class Home extends React.Component {

  render() {

    return (
      <div className="main-content">
        <h2>Announcements</h2>
        <div className="announcements">
          <div className="announcements__content home-page__message">
            <NovDecAnnouncement />
          </div>
        </div>
        <UpcomingEvent
          events={ this.props.events }
        />
        <PSA />
      </div>
    );
  };
};

export default Home;