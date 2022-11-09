import React, {useMemo, useState} from 'react';
import CoordinateService from "./components/CoordinateSevice";
import {getCoordinateData, getSpacemanName} from "./API/openNotifyData";
import TimeService from "./components/TimeService";
import SpacemanList from "./components/SpacemanList";
import MapMarker from "./components/MapMarker";
import './style.scss';

const App = () => {

  const [coordinate, setCoordinate] = useState({longitude: 0, latitude: 0});
  const [spacemanList, setSpacemanList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
      const coord = await getCoordinateData();
      const spacemanNames = await getSpacemanName();
      setCoordinate(coord)
      setSpacemanList(spacemanNames)
  }
  const updateData = useMemo(() => {
      setIsLoading(true);
      fetchData()
      setIsLoading(false);
      const timer = setInterval(async () => {
        fetchData()
      }, 5000);
    },[]);

  return (
    <div>
      {isLoading
        ? <h1>Загрузка...</h1>
        :
        <div className="main">
          <CoordinateService coordinate={coordinate}/>
          <TimeService/>
          <MapMarker coordinate={coordinate}/>
          <SpacemanList spacemanList={spacemanList}/>
        </div>
      }
    </div>
  );
};

export default App;
