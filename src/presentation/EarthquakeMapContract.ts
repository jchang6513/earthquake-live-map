import { EarthquakeEvent } from "domain/models/EarthquakeEvent";
import { ApiParams, Rectangle, Time, Circle, Others } from "domain/models/Params";
import { validateMessage } from "domain/models/messages";

export interface IEarthquakeMapView {

  showInfo(): void;

  hideInfo(): void;

  showSearch(): void;

  hideSearch(): void;

  showSideList(): void;

  hideSideList(): void;

  setEarthquakeList(earthquakeEvents: EarthquakeEvent[]):void;

  setEventsCount(eventsCount: number): void;
}

export interface IEarthquakeMapPresneter {

  getEarthquakeEvents(params: ApiParams):void;

  getEventsCount(params: ApiParams):void;

  validateTime(time: Time): boolean;

  validateRetangle(rect: Rectangle): validateMessage;

  validateCircle(circle: Circle): validateMessage;

  validateOthers(others: Others): boolean;

}
