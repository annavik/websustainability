import { Level } from "./level";

export interface ServerGuideline {
  title: string;
  category: {
    id: string;
    title: string;
  };
  description: string;
  impact: string;
  effort: string;
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
