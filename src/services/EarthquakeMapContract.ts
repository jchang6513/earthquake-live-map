import { EarthquakeEvent } from "models/domain/EarthquakeEvent";
import { ApiParams, Rectangle, Time, Circle, Others } from "models/domain/Params";
import { validateMessage } from "models/domain/messages";

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

  validateTime(time: Time): boolean;

  validateRetangle(rect: Rectangle): validateMessage;

  validateCircle(circle: Circle): boolean;

  validateOthers(others: Others): boolean;

}
