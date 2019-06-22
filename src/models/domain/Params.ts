import { number } from "prop-types";

export interface ApiParams {

}

export interface Time {
  startTime: Date;
  endTime: Date;
  updatedAfter: Date;
}

export interface Rectangle {
  minLat: number;
  maxLat: number;
  minLong: number;
  maxLong: number;
}

export interface Circle {
  lat: number;
  long: number;
  maxRad: number;
  maxRadKm: number;
}

export interface Others {

}
