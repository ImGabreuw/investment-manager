import { Page } from "puppeteer";
import { RealStateFundDTO } from "../api/dto/real-state-fund-dto.js";
import { RealStateFundAPI } from "../api/real-state-fund-api.js";
import { RealStateFundStepsService } from "../services/real-state-fund-steps-service.js";
import { RealStateFundXPathService } from "../services/real-state-fund-xpath-service.js";

class RealStateFundFacade {
  constructor(private readonly page: Page) {}

  async searchAndExtractData(code: string): Promise<RealStateFundDTO> {
    const realStateFundStepsService = new RealStateFundStepsService(this.page);
    const realStateFundXPathService = new RealStateFundXPathService();
    const realStateFundAPI = new RealStateFundAPI(
      this.page,
      realStateFundStepsService,
      realStateFundXPathService
    );

    return await realStateFundAPI.search<RealStateFundDTO>(code);
  }
}

export { RealStateFundFacade };
