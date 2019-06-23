import { UseCase, UCCallbacks } from "./UseCase";
import { EarthquakeMapRepository } from "data/repo/EarthquakeMapRepository";
import { ApiParams } from "domain/models/Params";
import { EarthquakeEvent } from "domain/models/EarthquakeEvent";

export interface GetEarthquakeEventsInputData {
  params: ApiParams;
}

export interface GetEarthquakeEventsOutputData {
  earthquakeEvents: EarthquakeEvent[];
}

export interface GetEarthquakeEventsCallbacks extends UCCallbacks<GetEarthquakeEventsOutputData> {}

export class GetEarthquakeEventsUseCase extends UseCase<GetEarthquakeEventsInputData, GetEarthquakeEventsOutputData> {

  private earthquakeMapRepository = new EarthquakeMapRepository();

  execute(inputData: GetEarthquakeEventsInputData, callbacks: GetEarthquakeEventsCallbacks): void {
    const { params } = inputData
    this.earthquakeMapRepository.getEarthquakeEvents(params, callbacks)
  };
}
