import { Page } from "puppeteer";

async function extractFrom(page: Page, xpath: string): Promise<string | null> {
  await page.waitForXPath(xpath);

  const elementHandle = await page.$x(xpath);

  const value = await page.evaluate((tag) => tag.textContent, elementHandle[0]);

  return value;
}

export { extractFrom };
