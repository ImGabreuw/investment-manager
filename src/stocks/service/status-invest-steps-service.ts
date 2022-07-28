import { Page } from "puppeteer";
import { StepsService } from "../../domain/steps-service.js";

class StatusInvestStepsService extends StepsService {
  constructor(page: Page) {
    super(page);
    this.registerAll();
  }

  registerAll(): void {
    this.register({
      sectionName: "Payout",
      steps: [
        {
          elementName: "max",
          action: "left_click",
          selector: `#payout-section > div > div > div.d-md-flex.justify-between.align-items-center.mb-2.mb-lg-4 > div.mt-3.mt-md-0 > div > div > ul > li:nth-child(3) > a`,
        },
      ],
    });
  }
}

export { StatusInvestStepsService };
