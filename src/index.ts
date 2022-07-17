import { launch, Page } from "puppeteer";

async function getRawCurrentValue(page: Page): Promise<string | null> {
  const xpath = `/html/body/main/div[2]/div[1]/div[1]/div/div[1]/strong`;

  await page.waitForXPath(xpath);

  const currentValueElementHandle = await page.$x(xpath);

  const currentValue = await page.evaluate(
    (currentValueTag) => currentValueTag.textContent,
    currentValueElementHandle[0]
  );

  return currentValue;
}

async function getRawPatrimony(page: Page): Promise<string | null> {
  const xpath = `/html/body/main/div[2]/div[5]/div/div[1]/div/div[2]/span[2]`;

  await page.waitForXPath(xpath);

  const patrimonyElementHandle = await page.$x(xpath);

  const patrimony = await page.evaluate(
    (patrimonyTag) => patrimonyTag.textContent,
    patrimonyElementHandle[0]
  );

  return patrimony;
}

const browser = await launch({ headless: false });
const page = await browser.newPage();

await page.goto("https://statusinvest.com.br/fundos-imobiliarios/mxrf11");

const currentValue = await getRawCurrentValue(page);
console.log(currentValue);

const patrimony = await getRawPatrimony(page);
console.log(patrimony);

await browser.close();
