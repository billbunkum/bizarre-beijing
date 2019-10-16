import React from 'react';
import RSVPButton from './RSVPButton.js';

class MoreInfoPage extends React.Component {
  render() {
    return (
      <div className="more-info">
        <h3 className="title">EventTitle</h3>
        <p className="lead">
          @Xuanwumen Catholic Church
        </p>
        <p className="address">
          No.141 Qianmen West Main Street, Xicheng District, Beijing 100031, China
        </p>
        <p>
          Join Bizarre Beijing as we tour the haunted and spooky sites of Beijing. We will begin our tour at Xuanwumen (The Gate of Death) and proceed through haunted hutongs and other supernatural sites.
        </p>
        <p>
          We will visit the blood soaked area around Caishikou Execution Grounds and be told the history and tales of Chinese Ghosts as well as practices for placating the spirits that walk the earth during the evening.
        </p>
        <p>
          We will finish our tour with at visit to a haunted Chinese Opera Guildhall that was built over a cemetery.
        </p>
        <p>
          Each participant will be given <span className="hell-money">“Hell money”</span> for the benefit of the wandering spirits as well as scrolls to protect everyone from possible Jiangshi (Chinese Zombies) attacks!
        </p>
        <p>
          This tour is not suitable for children and be prepared to be scared. Bizarre Beijing is not responsible if “something” follows you home afterwards!
        </p>
        <div>
          <RSVPButton />
        </div>
      </div>
    );
  }
};

export default MoreInfoPage;