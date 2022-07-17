import { launch, Page } from "puppeteer";

async function getCurrentValue(page: Page): Promise<string | null> {
  await page.waitForXPath(
    `/html/body/main/div[2]/div[1]/div[1]/div/div[1]/strong`
  );

  const currentValueElementHandle = await page.$x(
    `/html/body/main/div[2]/div[1]/div[1]/div/div[1]/strong`
  );

  const currentValue = await page.evaluate(
    (currentValueTag) => currentValueTag.textContent,
    currentValueElementHandle[0]
  );

  return currentValue;
}

const browser = await launch({ headless: false });
const page = await browser.newPage();

await page.goto("https://statusinvest.com.br/fundos-imobiliarios/mxrf11");

const currentValue = await getCurrentValue(page);

console.log(currentValue);

await browser.close();
