import React from 'react';
import '../style.scss';

const CoordinateService = ({coordinate}) => {
  return (
      <div className="block coordinate-time">
        <p className="title">ISS is now located at:</p>
        <span className="italic">longitude: {coordinate.longitude}</span>
        <span className="italic">latitude: {coordinate.latitude}</span>
      </div>
  );
};

export default CoordinateService;

