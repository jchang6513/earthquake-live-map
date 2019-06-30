import { EarthquakeEvent } from 'domain/models/EarthquakeEvent';
import { ApiParams } from 'domain/models/Params';
import { IEarthquakeMapView } from 'presentation/EarthquakeMapContract';

export default class EarthquakesMapViewSpy implements IEarthquakeMapView {

  public loading: boolean = false;
  public showInfo: boolean = false;
  public showSearch: boolean = false;
  public showSideList: boolean = false;


  toggleLoading(showLoading: boolean): void {
    this.loading = showLoading;
  }

  toggleInfo(showInfo: boolean): void {
    this.showInfo = showInfo;
  }

  toggleSearch(showSearch: boolean): void {
    this.showSearch = showSearch;
  }

  toggleSideList(showSideList: boolean): void {
    this.showSideList = showSideList;
  }

  setEarthquakeEvents(earthquakeEvents: EarthquakeEvent[]):void {
  }

  setEventsCount(eventsCount: number): void {
  }
}
