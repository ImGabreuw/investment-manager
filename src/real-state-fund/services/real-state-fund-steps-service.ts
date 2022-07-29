import { Page } from "puppeteer";
import { StepsService } from "../../domain/steps-service.js";

class RealStateFundStepsService extends StepsService {
  constructor(page: Page) {
    super(page);
    this.registerAll();
  }

  registerAll(): void {}
}

export { RealStateFundStepsService };
