import { Page } from "puppeteer";
import { PuppeteerHelper } from "../helpers/puppeteer-helper.js";
import { SectionSteps } from "./types/step-type.js";

abstract class StepsService {
  private readonly STEPS = new Map<string, SectionSteps>();

  constructor(private readonly page: Page) {}

  hasSteps(sectionName: string): boolean {
    return this.STEPS.has(sectionName);
  }

  register(sectionSteps: SectionSteps): void {
    const sectionName = sectionSteps.sectionName;

    if (this.hasSteps(sectionName)) {
      throw new Error(
        `uma seção de etapas já foi registrada com o nome "${sectionName}"`
      );
    }

    this.STEPS.set(sectionName, sectionSteps);
  }

  async execute(sectionName: string): Promise<void> {
    if (!this.hasSteps(sectionName)) return;

    const section = this.STEPS.get(sectionName);

    if (section?.steps === undefined) {
      throw new Error("seção de etapas inválida");
    }

    for (const step of section.steps) {
      await PuppeteerHelper.click(this.page, step.selector, step.action);
    }
  }
}

export { StepsService };
