import { launch } from "puppeteer";
import { RealStateFundFacade } from "./real-state-fund/facade/real-state-fund-facade.js";
import { ReclameAquiFacade } from "./reclame-aqui/facade/reclame-aqui-facade.js";
import { StockFacade } from "./stocks/facade/stock-facade.js";

const browser = await launch({ headless: false });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 1000 });

const realStateFund = await new RealStateFundFacade(page).searchAndExtractData(
  "cpts11"
);
console.log(realStateFund);

// const reclameAqui = await new ReclameAquiFacade(page).searchAndExtractData(
//   "vivo"
// );
// console.log(reclameAqui);

const stock = await new StockFacade(page).searchAndExtractData("rani3");
console.log(stock);

await browser.close();
