import { launch } from "puppeteer";
import { getRealStateFundIndicators } from "./status-invest.js";

const browser = await launch({ headless: false });
const page = await browser.newPage();

const realStateFundIndicators = await getRealStateFundIndicators(page);

console.log(realStateFundIndicators);
console.log(realStateFundIndicators.getDividendLast12Months());
console.log(realStateFundIndicators.getNumberOfShares());
console.log(realStateFundIndicators.getPVP());
console.log(realStateFundIndicators.getPatrimonyValue());

await browser.close();
