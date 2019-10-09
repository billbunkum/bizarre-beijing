import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';

const template = (
	<div>
    <header>
      <h1 className="display-2">Bizarre Beijing</h1> 
      <a href="/" className="nav-link">
        Home
      </a> 
      <a href="/news.html" className="nav-link">
        News
      </a>
      <a href="/contact_us.html" className="nav-link">
        Contact Us
      </a>
    </header>

    <h2>Upcoming Event</h2>
    <div className="upcoming-event">
      <h3 className="title">Friday 13th Haunt Tour</h3>
      <img src="/img/xuanwumen_church.png"
        className="img_friday13_2019_tour"
        />
      <p>Date: September 13, 2019<br />
        Time: 6:00 – 9:00pm<br />
        Price: ¥280<br />
        Place: Xuanwumen (in front of Xuanwumen Catholic Church).
      </p>
      <p>We will gather at 6:00 and depart at 6:15 sharp.<br />
      Due to safety concerns in regards to possible attacks by supernatural forces, we will limit the number of participants to <em>18 people</em>.
      </p>
      <div className="upcoming-event-button-layout">
        <button className="btn btn-outline-light btn-lg">
          <a href="/more_info.html">More info...</a>
        </button>

        <button className="btn btn-outline-light btn-lg">
          <a href="contact_us.html">RSVP Here</a>
        </button>
      </div>
    </div> 

    <p>If you are unable to attend this tour, other Ghost tours will be done throughout the Fall and Winter
      
    Tour is led by James Nobles, founder of the Beijing Horror Film Society, haunt blogger and resident historian of the strange and weird.
      
      <h3>Some locations are subject to change due to security issues.
        </h3>
    </p>

    <footer>© Bizarre Beijing 2019</footer>      
  </div> 
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);