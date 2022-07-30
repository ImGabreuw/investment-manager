import { Page } from "puppeteer";
import { StatusInvestStockDTO } from "../api/dto/status-invest-stock-dto.js";
import { StatusInvestStockAPI } from "../api/status-invest-stock-api.js";
import { StatusInvestStepsService } from "../service/status-invest-steps-service.js";
import { StatusInvestXPathService } from "../service/status-invest-xpath-service.js";

class StockFacade {
  constructor(private readonly page: Page) {}

  async searchAndExtractData(code: string) {
    const statusInvestStepsService = new StatusInvestStepsService(this.page);
    const statusInvestXPathService = new StatusInvestXPathService();
    const statusInvestStockAPI = new StatusInvestStockAPI(
      this.page,
      statusInvestStepsService,
      statusInvestXPathService
    );

    return await statusInvestStockAPI.search<StatusInvestStockDTO>(code);
  }
}

export { StockFacade };
