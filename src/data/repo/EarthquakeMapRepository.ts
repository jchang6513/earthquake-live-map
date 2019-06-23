import { ApiParams } from "domain/models/Params";
import { GetEarthquakeEventsCallbacks } from "domain/use_cases/GetEarthquakeEventsUseCase";
import axios from 'axios';
import { NetEarthquakeEvent } from "data/remote/NetEarthqualeEvent";
import { EarthquakeEvent } from "domain/models/EarthquakeEvent";

export class EarthquakeMapRepository {
  getEarthquakeEvents(params: ApiParams, callbacks: GetEarthquakeEventsCallbacks) {
    axios.get(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=100`, params)
      .then((response) => {
        const netEarthquakeEvents: NetEarthquakeEvent[] = response.data;
        const earthquakeEvents = netEarthquakeEvents as EarthquakeEvent[];
        console.log(earthquakeEvents)
        callbacks.onSuccess({earthquakeEvents});
      })
      .catch((error) => {
        console.log(error)
        callbacks.onError(error);
      });
  }
}
