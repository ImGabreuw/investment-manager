import { launch } from "puppeteer";
import { CriterialValidation } from "./criterial.js";
import { StatusInvest } from "./status-invest.js";

const browser = await launch({ headless: false });
const page = await browser.newPage();

const statusInvest = new StatusInvest("VISC11", page);
const fundIndicators = await statusInvest.getRealStateFundIndicators();

const criterial = new CriterialValidation(fundIndicators);
criterial.validate();

console.log(criterial);

await browser.close();
