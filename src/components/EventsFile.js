// EDIT specialHauntDescription TO true AND CREATE/RENDER THE APPROPRIATE
// COMPONENT AS A DESCRIPTION WHICH APPEARS IN MoreInfoPage.js

import uuid from 'uuid';

export const getEvents = () => {
  const events = [
    // November Tours
    {
      address: 'No.141 Qianmen West Main Street, Xicheng District, Beijing 100031, China',
      capacity: 18,
      date: "2019-11-23",
      departTime: "5:30pm",
      endTime: "8:00pm",
      gatherTime: "5:15pm",
      generalHauntContent: true,
      id: uuid(),
      imagePath: "/img/xuanwumen_church.png",
      meetingPlace: '@Xuanwumen Catholic Church',
      place: "Xuanwumen (in front of Xuanwumen Catholic Church)",
      price: "¥280",
      specialHauntContent: undefined,
      soldOut: false,
      startTime: "5:30pm",
      title: "November Early Evening Haunt"
    },
    {
      address: 'No.141 Qianmen West Main Street, Xicheng District, Beijing 100031, China',
      capacity: 18,
      date: "2019-11-23",
      departTime: "8:30pm",
      endTime: "11:00pm",
      gatherTime: "8:15pm",
      generalHauntContent: true,
      id: uuid(),
      imagePath: "/img/xuanwumen_church2.jpg",
      meetingPlace: '@Xuanwumen Catholic Church',
      place: "Xuanwumen (in front of Xuanwumen Catholic Church)",
      price: "¥280",
      specialHauntContent: undefined,
      soldOut: false,
      startTime: "8:30pm",
      title: "November Evening Haunt"
    },
    // December 13th Tours
    {
      address: 'No.141 Qianmen West Main Street, Xicheng District, Beijing 100031, China',
      capacity: 18,
      date: "2019-12-13",
      departTime: "5:30pm",
      endTime: "8:00pm",
      gatherTime: "5:15pm",
      generalHauntContent: true,
      id: uuid(),
      imagePath: "/img/xuanwumen_church.png",
      meetingPlace: '@Xuanwumen Catholic Church',
      place: "Xuanwumen (in front of Xuanwumen Catholic Church)",
      price: "¥280",
      specialHauntContent: undefined,
      soldOut: false,
      startTime: "5:30pm",
      title: "Friday 13th Early Haunt"
    },
    {
      address: 'No.141 Qianmen West Main Street, Xicheng District, Beijing 100031, China',
      capacity: 18,
      date: "2019-12-13",
      departTime: "8:30pm",
      endTime: "11:00pm",
      gatherTime: "8:15pm",
      generalHauntContent: true,
      id: uuid(),
      imagePath: "/img/xuanwumen_church2.jpg",
      meetingPlace: '@Xuanwumen Catholic Church',
      place: "Xuanwumen (in front of Xuanwumen Catholic Church)",
      price: "¥280",
      specialHauntContent: undefined,
      soldOut: false,
      startTime: "8:30pm",
      title: "Friday 13th Evening Haunt"
    },
    // December 21st Tours
    {
      address: 'No.141 Qianmen West Main Street, Xicheng District, Beijing 100031, China',
      capacity: 18,
      date: "2019-12-21",
      departTime: "5:30pm",
      endTime: "8:00pm",
      gatherTime: "5:15pm",
      generalHauntContent: true,
      id: uuid(),
      imagePath: "/img/xuanwumen_church.png",
      meetingPlace: '@Xuanwumen Catholic Church',
      place: "Xuanwumen (in front of Xuanwumen Catholic Church)",
      price: "¥280",
      specialHauntContent: undefined,
      soldOut: false,
      startTime: "5:30pm",
      title: "Winter Solstice Early Haunt"
    },
    {
      address: 'No.141 Qianmen West Main Street, Xicheng District, Beijing 100031, China',
      capacity: 18,
      date: "2019-12-21",
      departTime: "8:30pm",
      endTime: "11:00pm",
      gatherTime: "8:15pm",
      generalHauntContent: true,
      id: uuid(),
      imagePath: "/img/xuanwumen_church2.jpg",
      meetingPlace: '@Xuanwumen Catholic Church',
      place: "Xuanwumen (in front of Xuanwumen Catholic Church)",
      price: "¥280",
      specialHauntContent: undefined,
      soldOut: false,
      startTime: "8:30pm",
      title: "Winter Solstice Evening Haunt"
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