import { ApiParams, Rectangle, Circle } from "domain/models/Params";

export const testRect: Rectangle = {
  minLat: -60,
  maxLat: 60,
  minLong: -120,
  maxLong: 120,
};

export const testCircle: Circle = {
  lat: 0,
  long: 0,
  maxRad: 180,
  maxRadKm: undefined,
};

export const testParams: ApiParams = {
  rect: testRect,
  circle: testCircle,
};
