import { launch } from "puppeteer";
import { CriterionValidation } from "./criterion.js";
import { StatusInvest } from "./status-invest.js";
import { StatusInvestStockAPI } from "./stocks/api/status-invest-stock-api.js";

const browser = await launch({ headless: false });
const page = await browser.newPage();
page.setViewport({ width: 1200, height: 1000 });

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
  const statusInvest = new StatusInvestStockAPI(page);

  await statusInvest.search("TAEE11");
  const result = await statusInvest.extract();

  console.log(result);
}
