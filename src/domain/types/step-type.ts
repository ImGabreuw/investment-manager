import { Action } from "./action-type";

export type SectionSteps = {
  sectionName: string,
  steps: Step[],
}

export type Step = {
  elementName: string;
  action: Action;
  selector: string;
};
