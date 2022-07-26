import { Page } from "puppeteer";
import { STEPS } from "../config/status-invest/steps-config";
import { PuppeteerHelper } from "../helpers/puppeteer-helper";

class StepsService {
  constructor(readonly page: Page) {}

  hasSteps(sectionName: string): boolean {
    return Object.keys(STEPS).includes(sectionName);
  }

  async executeSteps(sectionName: string): Promise<void> {
    const stepSection = eval(`STEPS["${sectionName}"]`);

    for (const stepName of Object.keys(stepSection)) {
      const { action, selector } = eval(
        `STEPS["${sectionName}"]["${stepName}"]`
      );

      await PuppeteerHelper.click(this.page, selector, action);
    }
  }
}

export { StepsService };
