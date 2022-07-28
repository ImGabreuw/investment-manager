import { Page } from "puppeteer";
import { StepsService } from "../../domain/steps-service.js";

class ReclameAquiStepsService extends StepsService {
  constructor(page: Page) {
    super(page);
    this.registerAll();
  }

  private registerAll(): void {
    this.register({
      sectionName: "reputação",
      steps: [
        {
          elementName: "geral",
          action: "left_click",
          selector: `#reputation-tab-5`,
        },
      ],
    });
  }
}

export { ReclameAquiStepsService };
