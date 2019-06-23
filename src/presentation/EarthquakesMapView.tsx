import React from 'react';
import EarthquakesMap from 'components/EarthquakesMap';
import EarthquakesMapPresenter from './EarthquakesMapPresenter';

interface EarthquakesMapViewProps {

}

export interface EarthquakesMapViewState {

}

export default class EarthquakesMapView extends React.Component<EarthquakesMapViewProps, EarthquakesMapViewState> {
  private earthquakesMapPresenter: EarthquakesMapPresenter;

  constructor(props: EarthquakesMapViewProps) {
    super(props);
    this.state = {

    }
    this.earthquakesMapPresenter =  new EarthquakesMapPresenter();
    this.earthquakesMapPresenter.getEarthquakeEvents({});
  }
  render() {
    return (
      <EarthquakesMap { ...this.state } />
    )
  }
}
