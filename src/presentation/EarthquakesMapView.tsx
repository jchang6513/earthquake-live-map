import React from 'react';
import EarthquakesMap from 'components/EarthquakesMap';
import EarthquakesMapPresenter from './EarthquakesMapPresenter';
import { IEarthquakeMapView } from './EarthquakeMapContract';
import { EarthquakeEvent } from 'domain/models/EarthquakeEvent';
import { ApiParams } from 'domain/models/Params';

interface EarthquakesMapViewProps {

}

export interface EarthquakesMapViewState {
  params: ApiParams;
  earthquakeEvents: EarthquakeEvent[];
  eventsCount: number;
  loading: boolean;
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
      params: {},
      earthquakeEvents: [],
      eventsCount: 0,
      loading: false,
      showInfo: false,
      showSearch: false,
      showSideList: true,
    };
    this.earthquakesMapPresenter = new EarthquakesMapPresenter(this);
  }

  componentDidMount() {
    const { params } = this.state;
    this.earthquakesMapPresenter.getEarthquakeEvents(params);
  }

  render() {
    return (
      <EarthquakesMap />
    )
  }

  toggleLoading(loading: boolean): void {
    this.setState({ loading });
  }

  toggleInfo(showInfo: boolean): void {
    this.setState({ showInfo });
  }

  toggleSearch(showSearch: boolean): void {
    this.setState({ showSearch });
  }

  toggleSideList(showSideList: boolean): void {
    this.setState({ showSideList });
  }

  setEarthquakeEvents(earthquakeEvents: EarthquakeEvent[]):void {
    this.setState({ earthquakeEvents });
  }

  setEventsCount(eventsCount: number): void {
    this.setState({ eventsCount });
  }
}
