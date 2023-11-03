import { Level } from "./level";

export interface ServerGuideline {
  title: string;
  impact: string;
  effort: string;
}

export interface Guideline {
  id: string;
  index: number;
  title: string;
  impact: Level;
  impactLabel: string;
  effort: Level;
  effortLabel: string;
}
