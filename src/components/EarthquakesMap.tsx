import React from 'react';
import GoogleMapReact from 'google-map-react';

const EarthquakesMap = () => {
  const props = {
    center: {
      lat: 25.0470464,
      lng: 121.4401992,
    },
    zoom: 11
  }
  const googleMapKey = process.env.REACT_APP_GOOGLE_MAP_KEY;
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleMapKey as string }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      />
    </div>
  )
}

export default EarthquakesMap
