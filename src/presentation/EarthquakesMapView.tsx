import React from 'react';
import EarthquakesMap from 'components/EarthquakesMap';
import EarthquakesMapPresenter from './EarthquakesMapPresenter';
import { IEarthquakeMapView } from './EarthquakeMapContract';
import { EarthquakeEvent } from 'domain/models/EarthquakeEvent';

interface EarthquakesMapViewProps {

}

export interface EarthquakesMapViewState {
  earthquakeEvents: EarthquakeEvent[];
  eventsCount: number;
  showInfo: boolean;
  showSearch: boolean;
  showSideList: boolean;
}

export default class EarthquakesMapView
  extends React.Component<EarthquakesMapViewProps, EarthquakesMapViewState>
  implements IEarthquakeMapView {
  private earthquakesMapPresenter: EarthquakesMapPresenter;

  constructor(props: EarthquakesMapViewProps) {
    super(props);
    this.state = {
      earthquakeEvents: [],
      eventsCount: 0,
      showInfo: false,
      showSearch: false,
      showSideList: true,
    };
    this.earthquakesMapPresenter =  new EarthquakesMapPresenter();
    this.earthquakesMapPresenter.getEarthquakeEvents({});
  }
  render() {
    return (
      <EarthquakesMap />
    )
  }

  showSideList(): void {
    this.setState({ showSideList: true });
  }

  hideSideList(): void {
    this.setState({ showSideList: false });
  }

  showInfo(): void {
    this.setState({ showInfo: true });
  }

  hideInfo(): void {
    this.setState({ showInfo: false });
  }

  showSearch(): void {
    this.setState({ showSearch: true });
  }

  hideSearch(): void {
    this.setState({ showSearch: false });
  }

  setEarthquakeList(earthquakeEvents: EarthquakeEvent[]):void {
    this.setState({ earthquakeEvents });
  }

  setEventsCount(eventsCount: number): void {
    this.setState({ eventsCount });
  }
}
