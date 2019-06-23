import React from 'react';
import EarthquakesMap from 'components/EarthquakesMap';

interface EarthquakesMapViewProps {

}

export interface EarthquakesMapViewState {

}

export default class EarthquakesMapView extends React.Component<EarthquakesMapViewProps, EarthquakesMapViewState> {
  state: EarthquakesMapViewState = {

  }

  render() {
    return (
      <EarthquakesMap { ...this.state } />
    )
  }
}
