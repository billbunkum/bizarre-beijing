import React from 'react';

export const SoldOutMessage = () => {
  return (
    <div>
      <h3 className="messages-sold-out">Sold Out</h3>
    </div>
  );
};

export const NovDecAnnouncement = () => {
  return (
    <div>
      <p>Due to popular demand, we will offer two (2) tours on each evening.</p>
    </div>
  );
};

export const FallAnnouncementsMessage = () => {
  return (
    <p>As Fall has descended upon us and the holiday season is just around the corner, join <span className="emphasizer">Bizarre Beijing</span> as we tour the haunted and spooky sites of Beijing.</p>
  );
};

export const FallNewsMessage = () => {
  return (
    <div>
      <p>In 2020, we will go to other areas of Beijing including:
        </p> 
      <ul>
        <li>Xisi Execution Grounds
          </li>
        <li>798 Art District
          </li>
        <li>81 Chaonei
          </li>
        <li>The Ming Tombs</li>
        <li>...as well as other locations ripe with dread.
          </li>
      </ul>
    </div>
  );
};