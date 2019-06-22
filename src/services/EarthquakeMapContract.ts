import { EarthquakeEvent } from "@src/models/domain/EarthquakeEvent";
import { ApiParams, Rectangle, Time, Circle, Others } from "@src/models/domain/Params";

export interface IEarthquakeMapView {

  setEarthquakeList(earthquakeEvents: EarthquakeEvent[]):void;

  showSideList(): void;

  hideSideList(): void;

  showInfo(): void;

  hideInfo(): void;

  showSearch(): void;

  hideSearch(): void;

}

export interface IEarthquakeMapPresneter {

  getEarthquakeList(params: ApiParams):void;

  validateTime(time: Time): Boolean;

  validateRetangle(rect: Rectangle): Boolean;

  validateCircle(circle: Circle): Boolean;

  validateOthers(others: Others): Boolean;

}
