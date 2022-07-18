import { Page } from "puppeteer";
import { RealStateFundIndicators } from "./real-state-fund-Indicators.js";
import { extractFrom } from "./utils.js";

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

async function getMarketValue(page: Page): Promise<number | null> {
  const xpath = `/html/body/main/div[2]/div[5]/div/div[2]/div/div[2]/span[2]`;

  const rawMarketValue = await extractFrom(page, xpath);

  if (!rawMarketValue) {
    console.warn(
      `Não foi possível extrair "VALOR DE MERCADO" de ${page.url()}`
    );
    return null;
  }

  const marketValue = rawMarketValue
    .split(" ")
    .pop()
    ?.replaceAll(".", "") as string;

  return parseFloat(marketValue);
}

async function getDividendYieldInPercentage(
  page: Page
): Promise<number | null> {
  const xpath = `/html/body/main/div[2]/div[1]/div[4]/div/div[1]/strong`;

  const rawDividendYield = await extractFrom(page, xpath);

  if (!rawDividendYield) {
    console.warn(`Não foi possível extrair "DIVIDEND YIELD" de ${page.url()}`);
    return null;
  }

  const dividendYield = rawDividendYield.replace(",", ".");

  return parseFloat(dividendYield);
}

async function getCashValue(page: Page): Promise<number | null> {
  const xpath = `/html/body/main/div[2]/div[5]/div/div[3]/div/div[2]/span[2]`;

  const rawCashValue = await extractFrom(page, xpath);

  if (!rawCashValue) {
    console.warn(`Não foi possível extrair "VALOR EM CAIXA" de ${page.url()}`);
    return null;
  }

  const cashValue = rawCashValue
    .split(" ")
    .pop()
    ?.replaceAll(".", "")
    .replace(",", ".") as string;

  return parseFloat(cashValue);
}

async function getNumberOfShareholders(page: Page): Promise<number | null> {
  const xpath = `/html/body/main/div[2]/div[5]/div/div[6]/div/div[1]/strong`;

  const rawNumberOfShareholder = await extractFrom(page, xpath);

  if (!rawNumberOfShareholder) {
    console.warn(
      `Não foi possível extrair "NÚMERO DE COTISTAS" de ${page.url()}`
    );
    return null;
  }

  const numberOfShareholder = rawNumberOfShareholder.replaceAll(".", "");

  return parseFloat(numberOfShareholder);
}

async function getDividendYieldCAGRLast3Years(
  page: Page
): Promise<number | null> {
  const xpath = `/html/body/main/div[2]/div[5]/div/div[4]/div/div[1]/strong`;

  const rawDividendYieldCAGR = await extractFrom(page, xpath);

  if (!rawDividendYieldCAGR) {
    console.warn(
      `Não foi possível extrair "DY CAGR (3 ANOS)" de ${page.url()}`
    );
    return null;
  }

  const dividendYieldCAGR = rawDividendYieldCAGR.replaceAll(",", ".");

  return parseFloat(dividendYieldCAGR);
}

async function getDividendYieldCAGRLast5Years(
  page: Page
): Promise<number | null> {
  const xpath = `/html/body/main/div[2]/div[5]/div/div[4]/div/div[2]/span[2]`;

  const rawDividendYieldCAGR = await extractFrom(page, xpath);

  if (!rawDividendYieldCAGR) {
    console.warn(
      `Não foi possível extrair "DY CAGR (5 ANOS)" de ${page.url()}`
    );
    return null;
  }

  const dividendYieldCAGR = rawDividendYieldCAGR.replaceAll(",", ".");

  return parseFloat(dividendYieldCAGR);
}

async function getValueCAGRLast3Years(page: Page): Promise<number | null> {
  const xpath = `/html/body/main/div[2]/div[5]/div/div[5]/div/div[1]/strong`;

  const rawValueCAGR = await extractFrom(page, xpath);

  if (!rawValueCAGR) {
    console.warn(
      `Não foi possível extrair "VALOR CAGR (3 ANOS)" de ${page.url()}`
    );
    return null;
  }

  const valueCAGR = rawValueCAGR.replaceAll(",", ".");

  return parseFloat(valueCAGR);
}

async function getValueCAGRLast5Years(page: Page): Promise<number | null> {
  const xpath = `/html/body/main/div[2]/div[5]/div/div[5]/div/div[2]/span[2]`;

  const rawValueCAGR = await extractFrom(page, xpath);

  if (!rawValueCAGR) {
    console.warn(
      `Não foi possível extrair "VALOR CAGR (5 ANOS)" de ${page.url()}`
    );
    return null;
  }

  const valueCAGR = rawValueCAGR.replaceAll(",", ".");

  return parseFloat(valueCAGR);
}

async function getRealStateFundIndicators(
  page: Page
): Promise<RealStateFundIndicators> {
  await page.goto("https://statusinvest.com.br/fundos-imobiliarios/mxrf11");

  const currentValue = await getCurrentValue(page);
  const patrimony = await getPatrimony(page);
  const marketValue = await getMarketValue(page);
  const dividendYield = await getDividendYieldInPercentage(page);
  const cashValue = await getCashValue(page);
  const numberOfShareholders = await getNumberOfShareholders(page);
  const dividendYieldCAGRLast3Years = await getDividendYieldCAGRLast3Years(
    page
  );
  const dividendYieldCAGRLast5Years = await getDividendYieldCAGRLast5Years(
    page
  );
  const valueCAGRLast3Years = await getValueCAGRLast3Years(page);
  const valueCAGRLast5Years = await getValueCAGRLast5Years(page);

  return new RealStateFundIndicators(
    currentValue,
    patrimony,
    marketValue,
    dividendYield,
    cashValue,
    numberOfShareholders,
    dividendYieldCAGRLast3Years,
    dividendYieldCAGRLast5Years,
    valueCAGRLast3Years,
    valueCAGRLast5Years
  );
}

export { getRealStateFundIndicators };
