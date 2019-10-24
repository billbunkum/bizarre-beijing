import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.js';
// import configureStore from '.store/configureStore.js';
import { getEvents, filterEvents } from './components/EventsFile.js';
import './styles/styles.scss';

const events = filterEvents();
const allEvents = getEvents();

// TRYING react context:
// const EventsContext = React.createContext('events');
// <EventsContext.Provider value={events} />;

ReactDOM.render(<AppRouter 
  events={events} 
  allEvents={allEvents} />, 
  document.getElementById('app'));