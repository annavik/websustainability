import { Level } from "./level";

export interface ServerGuideline {
  Id: string;
  Title: string;
  Impact: string;
  Effort: string;
}

export interface Guideline {
  id: string;
  title: string;
  impact: Level;
  impactLabel: string;
  effort: Level;
  effortLabel: string;
}
