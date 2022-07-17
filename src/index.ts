import { launch, Page } from "puppeteer";

async function extractFrom(page: Page, xpath: string): Promise<string | null> {
  await page.waitForXPath(xpath);

  const elementHandle = await page.$x(xpath);

  const value = await page.evaluate((tag) => tag.textContent, elementHandle[0]);

  return value;
}

async function getCurrentValue(page: Page): Promise<number | null> {
  const xpath = `/html/body/main/div[2]/div[1]/div[1]/div/div[1]/strong`;

  const rawCurrentValue = await extractFrom(page, xpath);

  if (!rawCurrentValue) {
    console.warn(`Não foi possível extrair "VALOR ATUAL" de ${page.url()}`);
    return null;
  }

  const currentValue = rawCurrentValue.replace(",", ".");

  return parseFloat(currentValue);
}

async function getPatrimony(page: Page): Promise<number | null> {
  const xpath = `/html/body/main/div[2]/div[5]/div/div[1]/div/div[2]/span[2]`;

  const rawPatrimony = await extractFrom(page, xpath);

  if (!rawPatrimony) {
    console.warn(`Não foi possível extrair "PATRIMÔNIO" de ${page.url()}`);
    return null;
  }

  const patrimony = rawPatrimony
    .split(" ")
    .pop()
    ?.replaceAll(".", "") as string;

  return parseFloat(patrimony);
}

const browser = await launch({ headless: false });
const page = await browser.newPage();

await page.goto("https://statusinvest.com.br/fundos-imobiliarios/mxrf11");

const currentValue = await getCurrentValue(page);
console.log(currentValue);
console.log(typeof currentValue);

const patrimony = await getPatrimony(page);
console.log(patrimony);
console.log(typeof patrimony);

await browser.close();
