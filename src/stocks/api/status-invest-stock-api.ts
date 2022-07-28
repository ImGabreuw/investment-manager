import { Page } from "puppeteer";
import { API } from "../../domain/api.js";
import { CurrencyHelper } from "../../helpers/currency-helper.js";
import { NumberHelper } from "../../helpers/number-helper.js";
import { StatusInvestStepsService } from "../service/status-invest-steps-service.js";
import { StatusInvestXPathService } from "../service/status-invest-xpath-service.js";

class StatusInvestStockAPI extends API {
  constructor(
    page: Page,
    statusInvestStepsService: StatusInvestStepsService,
    statusInvestXPathService: StatusInvestXPathService
  ) {
    super(
      page,
      statusInvestStepsService,
      statusInvestXPathService,
      "https://statusinvest.com.br/acoes"
    );
  }

  normalize(text: string | null): string | number {
    if (text === null) {
      return "-/-";
    }

    text = CurrencyHelper.removeBrazilianCurrencySymbol(text);
    text = NumberHelper.removePercentSymbol(text);
    text = NumberHelper.removeNumberFormat(text);

    if (NumberHelper.isNotNumber(text)) {
      return text.trim();
    }

    return Number(Number(text).toFixed(3));
  }
}

export { StatusInvestStockAPI };
