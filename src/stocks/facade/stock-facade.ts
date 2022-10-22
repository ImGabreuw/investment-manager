import { Page } from "puppeteer";
import { FundamentusStockDTO } from "../api/dto/fundamentus-stock-dto.js";
import { StatusInvestStockDTO } from "../api/dto/status-invest-stock-dto.js";
import { FundamentusStockAPI } from "../api/fundamentus-stock-api.js";
import { StatusInvestStockAPI } from "../api/status-invest-stock-api.js";
import { FundamentusStepsService } from "../service/fundamentus-steps-service.js";
import { FundamentusXPathService } from "../service/fundamentus-xpath-service.js";
import { StatusInvestStepsService } from "../service/status-invest-steps-service.js";
import { StatusInvestXPathService } from "../service/status-invest-xpath-service.js";

class StockFacade {
  private statusInvestStockAPI: StatusInvestStockAPI;
  private fundamentusStockAPI: FundamentusStockAPI;

  constructor(private readonly page: Page) {
    const statusInvestStepsService = new StatusInvestStepsService(this.page);
    const statusInvestXPathService = new StatusInvestXPathService();
    this.statusInvestStockAPI = new StatusInvestStockAPI(
      this.page,
      statusInvestStepsService,
      statusInvestXPathService
    );

    const fundamentusStepsService = new FundamentusStepsService(this.page);
    const fundamentusXPathService = new FundamentusXPathService();
    this.fundamentusStockAPI = new FundamentusStockAPI(
      this.page,
      statusInvestStepsService,
      statusInvestXPathService
    );
  }

  async searchAndExtractData(code: string) {
    const statusInvest =
      await this.statusInvestStockAPI.search<StatusInvestStockDTO>(code);
    const fundamentus =
      await this.fundamentusStockAPI.search<FundamentusStockDTO>(code);

    return { ...statusInvest, ...fundamentus };
  }
}

export { StockFacade };
