import { launch } from "puppeteer";
import { CriterionValidation } from "./criterion.js";
import { StatusInvest } from "./status-invest.js";

const browser = await launch({ headless: false });
const page = await browser.newPage();

const statusInvest = new StatusInvest("MXRF11", page);
const fundIndicators = await statusInvest.getRealStateFundIndicators();

const criterion = new CriterionValidation(fundIndicators);
criterion.check();
console.log(criterion)

await browser.close();
