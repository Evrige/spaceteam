import React from 'react';
import SpacemanListItem from "./SpacemanListItem";
import '../style.scss';

const SpacemanList = ({spacemanList}) => {
  return (
    <div className="map-spaceman">
      <div className="block">
        <span className="title">Those who are now on the ISS:</span>
        {spacemanList.map(spaceman =>
          <SpacemanListItem spaceman={spaceman} key={spaceman.name}/>
        )}
      </div>
      <div className="block top">
        <span>Total amount: {spacemanList.length} people on ISS</span>
      </div>
    </div>
  );
};

export default SpacemanList;
