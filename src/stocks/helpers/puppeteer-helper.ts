import { MouseButton, Page } from "puppeteer";

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

  static async click(
    page: Page,
    selector: string,
    buttonAction: string
  ): Promise<void> {
    await Promise.all([
      page.waitForSelector(selector),
      page.click(selector, { button: buttonAction as MouseButton }),
      page.waitForTimeout(1_000),
    ]);
  }
}

export { PuppeteerHelper };
