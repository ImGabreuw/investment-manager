import { launch } from "puppeteer";
import { CriterionValidation } from "./criterion.js";
import { StatusInvest } from "./status-invest.js";
import {
  fullXpath,
  removeBrazilianCurrencySymbol,
} from "./stocks/api/stock-status-invest.js";
import { extractTextFrom } from "./stocks/helpers/puppeteer-helper.js";

const browser = await launch({ headless: false });
const page = await browser.newPage();

// await realStateFundTest();
await stockTest();

await browser.close();

async function realStateFundTest() {
  const statusInvest = new StatusInvest("MXRF11", page);
  const fundIndicators = await statusInvest.getRealStateFundIndicators();

  const criterion = new CriterionValidation(fundIndicators);
  criterion.check();
  console.log(criterion);
}

async function stockTest() {
  page.goto("https://statusinvest.com.br/acoes/taee11");

  const stockMinPrice = await extractTextFrom(page, fullXpath["MIN. MÊS"]);
  const formattedStockMinPrice = removeBrazilianCurrencySymbol(
    stockMinPrice || ""
  );

  console.log(formattedStockMinPrice);
}
