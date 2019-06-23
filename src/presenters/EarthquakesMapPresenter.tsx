import { IEarthquakeMapPresneter } from "services/EarthquakeMapContract";
import { ApiParams, Time, Others, Circle, Rectangle } from "models/domain/Params";
import { validateMessage } from "models/domain/messages";

export default class EarthquakesMapPresenter implements IEarthquakeMapPresneter {

  getEarthquakeList(params: ApiParams):void {

  }

  validateTime(time: Time): boolean {
    return false
  }

  validateRetangle(rect: Rectangle): validateMessage {
    const { minLat, maxLat, minLong, maxLong } = rect;
    if (minLat >= maxLat)
      { return { type: 'warning', content: 'Range of selected latitude is incorrect' }; }
    if (minLong >= maxLong)
      { return { type: 'warning', content: 'Range of selected longitude is incorrect' }; }
    if (minLat < -90 || maxLat > 90)
      { return { type: 'warning', content: 'Selected latitude is out of range' } }
    if (minLong < -180 || maxLong > 180)
      { return { type: 'warning', content: 'Selected longitude is out of range' } }
    return { type: 'success', content: '' };
  }

  validateCircle(circle: Circle): boolean {
    return false
  }

  validateOthers(others: Others): boolean {
    return false
  }
}
