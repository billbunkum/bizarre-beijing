// EDIT specialHauntDescription TO true AND CREATE/RENDER THE APPROPRIATE
// COMPONENT AS A DESCRIPTION WHICH APPEARS IN MoreInfoPage.js

import uuid from 'uuid';

export const getEvents = () => {
  const events = [
    {
      address: 'No.141 Qianmen West Main Street, Xicheng District, Beijing 100031, China',
      capacity: 18,
      date: "2019-11-18",
      departTime: "6:30pm",
      endTime: "9:00pm",
      gatherTime: "6:15pm",
      generalHauntContent: true,
      id: uuid(),
      imagePath: "/img/xuanwumen_church.png",
      meetingPlace: '@Xuanwumen Catholic Church',
      place: "Xuanwumen (in front of Xuanwumen Catholic Church)",
      price: "¥280",
      specialHauntContent: undefined,
      soldOut: true,
      startTime: "6:30pm",
      title: "November 18th Haunt Tour"
    },
    {
      address: 'No.141 Qianmen West Main Street, Xicheng District, Beijing 100031, China',
      capacity: 18,
      date: "2019-10-26",
      departTime: "6:30pm",
      endTime: "9:00pm",
      gatherTime: "6:15pm",
      generalHauntContent: true,
      id: uuid(),
      imagePath: "/img/xuanwumen_church2.jpg",
      meetingPlace: '@Xuanwumen Catholic Church',
      place: "Xuanwumen (in front of Xuanwumen Catholic Church)",
      price: "¥280",
      specialHauntContent: undefined,
      soldOut: true,
      startTime: "6:30pm",
      title: "October 26th Haunt Tour"
    },
    {
      address: '',
      capacity: undefined,
      date: '',
      departTime: '',
      endTime: '',
      gatherTime: '',
      generalHauntContent: true,
      id: uuid(),
      imagePath: '',
      meetingPlace: '',
      place: '',
      price: "¥0",
      specialHauntContent: undefined,
      soldOut: false,
      startTime: '',
      title: 'Untitled'
    }
  ];
  return events;
};

// SHOULD SORT BY DATES
const sortEvents = (events) => {
  // ...code
};

export const filterEvents = () => {
  const events = getEvents();
  const dateNow = new Date();
// FILTERS BASED ON event DATE PASSED OR NOT
  const filteredEvents = events.filter((event) => {
    let eventDate = new Date(event.date);
    if (eventDate >= dateNow) {
      return event;
    }
  });
  // return sortEvents(filteredEvents);
  return filteredEvents;
};

const currentEvents = filterEvents();