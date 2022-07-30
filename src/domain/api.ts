import { Page } from "puppeteer";
import { PuppeteerHelper } from "../helpers/puppeteer-helper.js";
import { ReflectionHelper } from "../helpers/reflection-helper.js";
import { DTO } from "./dto.js";
import { SEARCH_STEPS_SECTION_NAME, StepsService } from "./steps-service.js";
import { XPathService } from "./xpath-service.js";

abstract class API {
  constructor(
    protected readonly page: Page,
    protected readonly stepsService: StepsService,
    protected readonly xpathService: XPathService,
    protected readonly baseUrl: string,
    protected readonly endpointUrl: string
  ) {}

  async search<T extends DTO>(searchText: string): Promise<T> {
    if (ReflectionHelper.isImplementsRegisterSearchSteps(this.stepsService)) {
      this.stepsService.registerSearchSteps(searchText);

      await this.page.goto(this.baseUrl);

      await this.stepsService.execute(SEARCH_STEPS_SECTION_NAME);
    } else {
      await this.page.goto(`${this.endpointUrl}/${searchText}`);
    }

    return await this.extract();
  }

  async extract<T extends DTO>(): Promise<T> {
    const dto = Object.create({}) as T;

    const sections = this.xpathService.getAll();

    for (const { sectionName, xPaths } of sections) {
      await this.stepsService.execute(sectionName);

      for (const { elementName, xPath } of xPaths) {
        const content = await PuppeteerHelper.extractTextFrom(this.page, xPath);
        const normalizedContent = this.normalize(elementName, content);

        if (typeof normalizedContent === "string") {
          eval(`dto["${elementName}"] = "${normalizedContent}"`);
          continue;
        }

        eval(`dto["${elementName}"] = ${normalizedContent}`);
      }
    }

    return dto;
  }

  abstract normalize(elementName: string, content: string | null): any;
}

export { API };
