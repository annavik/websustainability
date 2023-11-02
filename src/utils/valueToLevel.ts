import { Level } from "../models/level";

export const valueToLevel = (value: string): Level => {
  switch (value) {
    case "Low":
      return Level.Low;
    case "Medium":
      return Level.Medium;
    case "High":
      return Level.High;
    default:
      return Level.Unknown;
  }
};
