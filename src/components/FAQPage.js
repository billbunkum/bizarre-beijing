import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import GoHomeButton from './GoHomeButton.js';

const FAQPage = () => {
  return (
    <div>
      <h2>FAQ</h2>
      <div className="faq-page">
        <div className="faq-page__questions">
          <h3>How to book a tour with us?</h3>
          <div>Booking a tour is <em>easy</em>! Send us a <Link to="/contact" className="faq-page__inline-link">message </Link> and we will get back with you ASAP.</div>
        </div>

        <div className="faq-page__questions">
          <h3>What difficulty are our tours?</h3>
          <div>Our tours are <em>walking tours</em>, so you will need to be able to be on your feet for an hour or two. Don't worry, though! We take frequent breaks!</div>
        </div>        
        
        <div className="faq-page__questions">
          <h3>What should you wear on our tours?</h3>
          <div>You should wear comfortable shoes and clothes fit for the season. Beijing winters are cold, so bundle up!</div>
        </div>
        <div className="faq-page__buttons">
          <GoHomeButton />
        </div>
      </div>      

    </div>
  );
};

export default FAQPage;