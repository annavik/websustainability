import { Level } from "./level";

export interface ServerGuideline {
  id: string;
  title: string;
  impact: string;
  effort: string;
}

export interface Guideline {
  id: string;
  title: string;
  impact: Level;
  impactLabel: string;
  effort: Level;
  effortLabel: string;
}
