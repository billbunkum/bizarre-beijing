import React from 'react';
import GoHomeButton from './GoHomeButton.js';
import RSVPButton from './RSVPButton.js';
import GeneralHauntDescription from './GeneralHauntDescription.js';
import SpecialHauntDescription from './SpecialHauntDescription.js';
import { getEvents, filterEvents } from './EventsFile.js';

const events = getEvents();
// const events = filterEvents();
class MoreInfoPage extends React.Component {
  render() {
    const eventId = this.props.match.params.id;

    return (
      <div>
        <div className="more-info">
          <div className="more-info__header">
            <h3 className="more-info__title">
              {events[eventId].title}
            </h3>
          
            <div className="more-info__subtitle">
              <p>
                {events[eventId].meetingPlace}
              </p>
              <p>
                {events[eventId].address}
              </p>
            </div>
          </div>

          <div className="more-info__detail-section">
            {events[eventId].generalHauntContent && 
            !events[eventId].specialHauntContent &&  <GeneralHauntDescription />}
            {events[eventId].specialHauntContent && 
            <SpecialHauntDescription />}
          </div>
          <div className="more-info__buttons">
            <RSVPButton />
            <GoHomeButton />
          </div>

        </div>
      </div>
    )
  };
};

export default MoreInfoPage;