import { IEarthquakeMapPresneter } from "services/EarthquakeMapContract";
import { ApiParams, Time, Others, Circle, Rectangle } from "models/domain/Params";
import { validateMessage } from "models/domain/messages";

export default class EarthquakesMapPresenter implements IEarthquakeMapPresneter {

  getEarthquakeList(params: ApiParams):void {

  }

  validateTime(time: Time): boolean {
    return true
  }

  validateRetangle(rect: Rectangle): validateMessage {
    const { minLat, maxLat, minLong, maxLong } = rect;
    if (minLat && maxLat && (minLat >= maxLat))
      { return { type: 'warning', content: 'Range of selected latitude is incorrect' }; }
    if (minLong && maxLong && (minLong >= maxLong))
      { return { type: 'warning', content: 'Range of selected longitude is incorrect' }; }
    if (minLat && maxLat && (minLat < -90 || maxLat > 90))
      { return { type: 'warning', content: 'Selected latitude is out of range' } }
    if (minLong && maxLong && (minLong < -180 || maxLong > 180))
      { return { type: 'warning', content: 'Selected longitude is out of range' } }
    return { type: 'success', content: '' };
  }

  validateCircle(circle: Circle): validateMessage {
    const { lat, long, maxRad, maxRadKm } = circle;
    if (lat && (lat < -90 || lat > 90))
      { return { type: 'warning', content: 'Selected latitude is out of range' } }
    if (long && (long < -180 || long > 180))
      { return { type: 'warning', content: 'Selected longitude is out of range' } }
    if (maxRad && (maxRad < 0 || maxRad > 180))
      { return { type: 'warning', content: 'Max radius is out of range' } }
    if (maxRadKm && (maxRadKm < 0 || maxRadKm > 20001.6))
      { return { type: 'warning', content: 'Max radius km is out of range' } }
    if (maxRad && maxRadKm)
      { return { type: 'warning', content: 'Max raduis and Max Radius km can not be both assigned' } }
    return { type: 'success', content: '' };
  }

  validateOthers(others: Others): boolean {
    return false
  }
}
