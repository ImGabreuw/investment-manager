import { launch } from "puppeteer";
import { StatusInvest } from "./status-invest.js";

const browser = await launch({ headless: false });
const page = await browser.newPage();

const statusInvest = new StatusInvest("MXRF11", page);
const indicators = await statusInvest.getRealStateFundIndicators();

console.log(indicators);
console.log(indicators.getDividendLast12Months());
console.log(indicators.getNumberOfShares());
console.log(indicators.getPVP());
console.log(indicators.getPatrimonyValue());

await browser.close();
