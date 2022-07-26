import { Page } from "puppeteer";
import { STEPS } from "../config/status-invest/steps-config.js";
import { FULL_XPATH } from "../config/status-invest/xpath-config.js";
import { CurrencyHelper } from "../helpers/currency-helper.js";
import { NumberHelper } from "../helpers/number-helper.js";
import { PuppeteerHelper } from "../helpers/puppeteer-helper.js";
import { StatusInvestStockDTO } from "./dto/status-invest-stock-dto.js";

const BASE_URL = "https://statusinvest.com.br/acoes";

class StatusInvestStockAPI {
  constructor(private readonly page: Page) {}

  async search(stockName: string): Promise<void> {
    await this.page.goto(`${BASE_URL}/${stockName}`);
  }

  async extract(): Promise<StatusInvestStockDTO> {
    const dto = Object.create(new StatusInvestStockDTO());

    for (const sectionName of Object.keys(FULL_XPATH)) {
      const section = eval(`FULL_XPATH["${sectionName}"]`);

      if (this.hasSteps(sectionName)) {
        await this.executeSteps(sectionName);
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

  private hasSteps(sectionName: string): boolean {
    return Object.keys(STEPS).includes(sectionName);
  }

  private async executeSteps(sectionName: string): Promise<void> {
    const stepSection = eval(`STEPS["${sectionName}"]`);

    for (const stepName of Object.keys(stepSection)) {
      const { action, selector } = eval(
        `STEPS["${sectionName}"]["${stepName}"]`
      );

      await PuppeteerHelper.click(
        this.page,
        selector,
        this.getClickTypeFromText(action)
      );
    }
  }

  private getClickTypeFromText(text: string): string {
    const clickType = text.split("_")[0];

    if (clickType !== "left" && clickType !== "right") return "left";

    return clickType;
  }
}

export { StatusInvestStockAPI };
