import { launch } from "puppeteer";
import { CriterionValidation } from "./criterion.js";
import { ReclameAquiDTO } from "./reclame-aqui/api/dto/reclame-aqui-dto.js";
import { ReclameAquiAPI } from "./reclame-aqui/api/reclame-aqui-api.js";
import { ReclameAquiStepsService } from "./reclame-aqui/service/reclame-aqui-steps-service.js";
import { ReclameAquiXPathService } from "./reclame-aqui/service/reclame-aqui-xpath-service.js";
import { StatusInvest } from "./status-invest.js";
import { StatusInvestStockDTO } from "./stocks/api/dto/status-invest-stock-dto.js";
import { StatusInvestStockAPI } from "./stocks/api/status-invest-stock-api.js";
import { StatusInvestStepsService } from "./stocks/service/status-invest-steps-service.js";
import { StatusInvestXPathService } from "./stocks/service/status-invest-xpath-service.js";

const browser = await launch({ headless: false });
const page = await browser.newPage();
page.setViewport({ width: 1200, height: 1000 });

// await realStateFundTest();
await stockTest();
// await reclameAquiTest();

await browser.close();

async function realStateFundTest() {
  const statusInvest = new StatusInvest("MXRF11", page);
  const fundIndicators = await statusInvest.getRealStateFundIndicators();

  const criterion = new CriterionValidation(fundIndicators);
  criterion.check();
  console.log(criterion);
}

async function stockTest() {
  const statusInvestStepsService = new StatusInvestStepsService(page);
  const statusInvestXPathService = new StatusInvestXPathService();
  const statusInvestStockAPI = new StatusInvestStockAPI(
    page,
    statusInvestStepsService,
    statusInvestXPathService
  );

  const result = await statusInvestStockAPI.search<StatusInvestStockDTO>(
    "taee11"
  );

  console.log(result);
}

async function reclameAquiTest() {
  const reclameAquiStepsService = new ReclameAquiStepsService(page);
  const reclameAquiXPathService = new ReclameAquiXPathService();
  const reclameAquiAPI = new ReclameAquiAPI(
    page,
    reclameAquiStepsService,
    reclameAquiXPathService
  );

  const result = await reclameAquiAPI.search<ReclameAquiDTO>("suno-research");

  console.log(result);
}
