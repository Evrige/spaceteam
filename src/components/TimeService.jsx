import React from 'react';
import '../style.scss';

const TimeService = () => {
  const date = new Date();
  const formatterDate =  {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };
  const formatterTime = {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    timeZone: 'UTC'
  };

  return (
    <div className="block coordinate-time">
      <p className="title">Current UTC time: {date.toLocaleTimeString("en-US", formatterTime)}</p>
      <p className="italic">{date.toLocaleDateString("en-US", formatterDate)}</p>
    </div>
  );
};

export default TimeService;
