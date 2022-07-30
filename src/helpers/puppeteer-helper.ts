import { MouseButton, Page } from "puppeteer";

class PuppeteerHelper {
  private constructor() {}

  static async extractTextFrom(
    page: Page,
    xpath: string
  ): Promise<string | null> {
    await page.waitForXPath(xpath, { timeout: 10_000 });

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
    buttonAction = PuppeteerHelper.getClickTypeFromText(buttonAction);

    await page.waitForSelector(selector, { timeout: 10_000 });
    await page.click(selector, { button: buttonAction as MouseButton });
    await page.waitForTimeout(1_000);
  }

  static async type(page: Page, selector: string, text: string): Promise<void> {
    await page.waitForSelector(selector, { timeout: 10_000 });
    await page.type(selector, text.trim().toLowerCase());
    await page.waitForTimeout(1_000);
  }

  static getClickTypeFromText(text: string): string {
    const clickType = text.split("_")[0];

    if (clickType !== "left" && clickType !== "right") return "left";

    return clickType;
  }
}

export { PuppeteerHelper };
