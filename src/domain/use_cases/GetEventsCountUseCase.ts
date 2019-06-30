import { UseCase, UCCallbacks } from "./UseCase";
import { EarthquakeMapRepository } from "data/repo/EarthquakeMapRepository";
import { ApiParams } from "domain/models/Params";
import { EarthquakeEvent } from "domain/models/EarthquakeEvent";

export interface GetEventsCountInputData {
  params: ApiParams;
}

export interface GetEventsCountOutputData {
  earthquakeEvents: EarthquakeEvent[];
}

export interface GetEventsCountCallbacks extends UCCallbacks<GetEventsCountOutputData> {}

export class GetEventsCountUseCase extends UseCase<GetEventsCountInputData, GetEventsCountOutputData> {

  private earthquakeMapRepository = new EarthquakeMapRepository();

  execute(inputData: GetEventsCountInputData, callbacks: GetEventsCountCallbacks): void {
    const { params } = inputData
    this.earthquakeMapRepository.getEarthquakeEvents(params, callbacks)
  };
}
