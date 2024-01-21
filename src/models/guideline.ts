import { Level } from "./level";

export interface ServerGuideline {
  id: string;
  title: string;
  category: {
    id: string;
    title: string;
  };
  description: string;
  criteria: {
    title: string;
    description: string;
  }[];
  impact: {
    title: string;
    value: number;
  };
  effort: {
    title: string;
    value: number;
  };
  tags: string[];
  url: string;
}

export type Guideline = Omit<ServerGuideline, "impact" | "effort"> & {
  id: string;
  index: number;
  impact: {
    level: Level;
    title: string;
  };
  effort: {
    level: Level;
    title: string;
  };
};
