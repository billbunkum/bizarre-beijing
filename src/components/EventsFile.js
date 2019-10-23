// EDIT specialHauntDescription TO true AND CREATE/RENDER THE APPROPRIATE
// COMPONENT AS A DESCRIPTION WHICH APPEARS IN MoreInfoPage.js

export function getEvents() {
  const events = [
    {
      address: 'No.141 Qianmen West Main Street, Xicheng District, Beijing 100031, China',
      capacity: 18,
      date: "October 18, 2019",
      departTime: "6:30pm",
      endTime: "9:00pm",
      gatherTime: "6:15pm",
      generalHauntContent: true,
      imagePath: "/img/xuanwumen_church.png",
      meetingPlace: '@Xuanwumen Catholic Church',
      place: "Xuanwumen (in front of Xuanwumen Catholic Church)",
      price: "¥280",
      specialHauntContent: undefined,
      soldOut: true,
      startTime: "6:30pm",
      title: "October 18th Haunt Tour"
    },
    {
      address: 'No.141 Qianmen West Main Street, Xicheng District, Beijing 100031, China',
      capacity: 18,
      date: "October 26, 2019",
      departTime: "6:30pm",
      endTime: "9:00pm",
      gatherTime: "6:15pm",
      generalHauntContent: true,
      imagePath: "/img/xuanwumen_church2.jpg",
      meetingPlace: '@Xuanwumen Catholic Church',
      place: "Xuanwumen (in front of Xuanwumen Catholic Church)",
      price: "¥280",
      specialHauntContent: undefined,
      soldOut: false,
      startTime: "6:30pm",
      title: "October 26th Haunt Tour"
    }
  ];
  return events;
};

// export default getEvents;