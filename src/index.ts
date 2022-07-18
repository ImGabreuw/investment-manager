import { launch } from "puppeteer";
import { StatusInvest } from "./status-invest.js";

const browser = await launch({ headless: false });
const page = await browser.newPage();

const statusInvest = new StatusInvest("MXRF11", page);
const indicators = await statusInvest.getRealStateFundIndicators();
console.log(indicators);

await browser.close();
