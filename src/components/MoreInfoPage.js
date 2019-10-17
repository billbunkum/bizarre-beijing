import React from 'react';
import RSVPButton from './RSVPButton.js';

class MoreInfoPage extends React.Component {
  render() {
    return (
      <div className="main-content">
        <div className="more-info">
          <div className="more-info__header">
            <h3 className="more-info__title">Friday 13th Haunt Tour</h3>
            <div className="more-info__subtitle">
              <p>
                @Xuanwumen Catholic Church
              </p>
              <p>
                No.141 Qianmen West Main Street, Xicheng District, Beijing 100031, China
              </p>
            </div>
          </div>
          <div className="more-info__detail-section">
            <p>
              Join <span className="emphasizer">Bizarre Beijing</span> as we tour the haunted and spooky sites of Beijing. We will begin our tour at <em>Xuanwumen (The Gate of Death)</em> and proceed through haunted hutongs and other supernatural sites.
            </p>
            <p>
              We will visit the blood soaked area around <em>Caishikou Execution Grounds</em> and be told the history and tales of Chinese Ghosts as well as practices for placating the spirits that walk the earth during the evening.
            </p>
            <p>
              We will finish our tour with at visit to a haunted <em>Chinese Opera Guildhall</em> that was built over a cemetery.
            </p>
            <p>
              Each participant will be given <span className="emphasizer">“Hell money”</span> for the benefit of the wandering spirits as well as scrolls to protect everyone from possible Jiangshi (Chinese Zombies) attacks!
            </p>
            <p>
              This tour is <em>not</em> suitable for children and be prepared to be scared. <span className="emphasizer">Bizarre Beijing</span> is not responsible if “something” follows you home afterwards!
            </p>
          </div>
          <div className="more-info__buttons">
            <RSVPButton />
          </div>

        </div>
      </div>
    );
  }
};

export default MoreInfoPage;