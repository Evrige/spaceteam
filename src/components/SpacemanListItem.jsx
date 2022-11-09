import React from 'react';
import '../style.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const SpacemanListItem = ({spaceman}) => {
  return (
    <div className="spaceman">
      <FontAwesomeIcon icon={faUser} className="icon"/>
      <span>{spaceman.name}</span>
    </div>
  );
};

export default SpacemanListItem;
