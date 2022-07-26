import { Page } from "puppeteer";
import { FULL_XPATH } from "../config/status-invest/xpath-config.js";
import { CurrencyHelper } from "../../helpers/currency-helper.js";
import { NumberHelper } from "../../helpers/number-helper.js";
import { PuppeteerHelper } from "../../helpers/puppeteer-helper.js";
import { StepsService } from "../service/steps-service.js";
import { StatusInvestStockDTO } from "./dto/status-invest-stock-dto.js";

const BASE_URL = "https://statusinvest.com.br/acoes";

class StatusInvestStockAPI {
  constructor(
    private readonly page: Page,
    private readonly stepsService: StepsService
  ) {}

  async search(stockName: string): Promise<void> {
    await this.page.goto(`${BASE_URL}/${stockName}`);
  }

  async extract(): Promise<StatusInvestStockDTO> {
    const dto = Object.create(new StatusInvestStockDTO());

    for (const sectionName of Object.keys(FULL_XPATH)) {
      const section = eval(`FULL_XPATH["${sectionName}"]`);

      if (this.stepsService.hasSteps(sectionName)) {
        await this.stepsService.executeSteps(sectionName);
      }

      for (const indicatorName of Object.keys(section)) {
        const indicatorXpath = eval(
          `FULL_XPATH["${sectionName}"]["${indicatorName}"]`
        );

        const indicator = await PuppeteerHelper.extractTextFrom(
          this.page,
          indicatorXpath
        );

        dto[indicatorName] = this.normalizeAndConvert(indicator);
      }
    }

    return dto;
  }

  private normalizeAndConvert(text: string | null): string | number {
    if (text === null) {
      return "-/-";
    }

    text = CurrencyHelper.removeBrazilianCurrencySymbol(text);
    text = NumberHelper.removePercentSymbol(text);
    text = NumberHelper.removeNumberFormat(text);

    if (NumberHelper.isNotNumber(text)) {
      return text.trim();
    }

    return Number(Number(text).toFixed(3));
  }
}

export { StatusInvestStockAPI };
