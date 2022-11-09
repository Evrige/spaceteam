import React from 'react';
import {GoogleMap, Marker, useLoadScript} from "@react-google-maps/api";
import '../style.scss';
import {TOKEN_GOOGLE_API} from "../config/config";

const MapMarker = ({coordinate}) => {
    const {isLoaded} = useLoadScript({
      googleMapsApiKey: TOKEN_GOOGLE_API
    })
    if(!isLoaded) return <div>Loading...</div>;

    const coord = {lat: +coordinate.latitude, lng: +coordinate.longitude};

    return <GoogleMap className="map-spaceman" zoom={4} center={coord}>
      <Marker position={coord} />
    </GoogleMap>
};


export default MapMarker;
