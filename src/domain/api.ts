import { Page } from "puppeteer";
import { CurrencyHelper } from "../helpers/currency-helper.js";
import { NumberHelper } from "../helpers/number-helper.js";
import { PuppeteerHelper } from "../helpers/puppeteer-helper.js";
import { DTO } from "./dto.js";
import { StepsService } from "./steps-service.js";
import { XPathService } from "./xpath-service.js";

abstract class API {
  constructor(
    private readonly page: Page,
    private readonly stepsService: StepsService,
    private readonly xpathService: XPathService,
    private readonly endpointUrl: string
  ) {}

  async search<T extends DTO>(code: string): Promise<T> {
    await this.page.goto(`${this.endpointUrl}/${code}`);

    return await this.extract();
  }

  async extract<T extends DTO>(): Promise<T> {
    const dto = Object.create({}) as T;

    const sections = this.xpathService.getAll();

    for (const { sectionName, xPaths } of sections) {
      await this.stepsService.execute(sectionName);

      for (const { elementName, xPath } of xPaths) {
        const content = await PuppeteerHelper.extractTextFrom(this.page, xPath);
        const normalizedContent = this.normalize(content);

        eval(`dto["${elementName}"] = ${normalizedContent}`);
      }
    }

    return dto;
  }

  abstract normalize(text: string | null): any;
}

export { API };
