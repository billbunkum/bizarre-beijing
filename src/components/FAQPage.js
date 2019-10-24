import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import GoHomeButton from './GoHomeButton.js';

const FAQPage = () => {
  return (
    <div className="main-content">
      
      <h3>How to book a tour with us?</h3>
      <div>Booking a tour is <em>easy</em>! Send us a <NavLink to="/contact" className="is-active">message </NavLink> and we will get back with you ASAP.</div>
      
      <h3>What difficulty are our tours?</h3>
      <div>Our tours are <em>walking tours</em>, so you will need to be able to be on your feet for an hour or two. Don't worry, though! We take frequent breaks!</div>
      
      <h3>What should you wear on our tours?</h3>
      <div>You should wear comfortable shoes and clothes fit for the season. Beijing winters are cold, so bundle up!</div>

      <GoHomeButton />
    </div>
  );
};

export default FAQPage;