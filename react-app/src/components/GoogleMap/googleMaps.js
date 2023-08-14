import React from "react";
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'black',
    background: 'white',
    text: 'bold',
    padding: '7px 5px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);


export default function SimpleMap() {


  const defaultProps = {
    center: {
      color: 'white',
      lat: 33.9326834,
      lng: -84.0872585,
      mapTypeId: 'satellite'
    },
    zoom: 15,
    mapTypeId: 'satellite'
  };


  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '200px', width: '200px', color: 'none',backgroundColor: 'white !important' }}>
      <GoogleMapReact
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
        
          lat={33.9326834}
          lng={-84.0872585}
          text="YongMen Office"
        />
      </GoogleMapReact>
    </div>
  );
}
