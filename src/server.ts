import { PuppeteerLauncher } from "./puppeteer-launcher.js";
import { RealStateFundFacade } from "./real-state-fund/facade/real-state-fund-facade.js";
import { ReclameAquiFacade } from "./reclame-aqui/facade/reclame-aqui-facade.js";
import { StockFacade } from "./stocks/facade/stock-facade.js";

const { browser, page } = await PuppeteerLauncher.launch();

const realStateFund = await new RealStateFundFacade(page).searchAndExtractData(
  "jsre11"
);
console.log(realStateFund);

const reclameAqui = await new ReclameAquiFacade(page).searchAndExtractData(
  "Suno Research"
);
console.log(reclameAqui);

const stock = await new StockFacade(page).searchAndExtractData("bbas3");
console.log(stock);

await browser.close();
