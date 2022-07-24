import { Page } from "puppeteer";

class PuppeteerHelper {
  private constructor() {}

  static async extractTextFrom(
    page: Page,
    xpath: string
  ): Promise<string | null> {
    await page.waitForXPath(xpath);

    const elementHandle = await page.$x(xpath);

    const text = await page.evaluate(
      (tag) => tag.textContent,
      elementHandle[0]
    );

    return text;
  }
}

export { PuppeteerHelper };
