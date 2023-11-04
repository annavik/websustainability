import { Level } from "./level";

export interface ServerGuideline {
  title: string;
  category: {
    id: string;
    title: string;
  };
  impact: string;
  effort: string;
  tags: string[];
}

export interface Guideline {
  id: string;
  index: number;
  title: string;
  category: {
    label: string;
    value: string;
  };
  impact: Level;
  impactLabel: string;
  effort: Level;
  effortLabel: string;
  tags: string[];
}
