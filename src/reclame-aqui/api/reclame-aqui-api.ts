import { Page } from "puppeteer";
import { API } from "../../domain/api.js";
import { NumberHelper } from "../../helpers/number-helper.js";
import { ReclameAquiStepsService } from "../service/reclame-aqui-steps-service.js";
import { ReclameAquiXPathService } from "../service/reclame-aqui-xpath-service.js";

class ReclameAquiAPI extends API {
  constructor(
    page: Page,
    reclameAquiStepsService: ReclameAquiStepsService,
    reclameAquiXPathService: ReclameAquiXPathService
  ) {
    super(
      page,
      reclameAquiStepsService,
      reclameAquiXPathService,
      "https://www.reclameaqui.com.br/empresa"
    );
  }

  normalize(text: string | null): string | number {
    if (text === null) {
      return "-/-";
    }

    text = NumberHelper.removePercentSymbol(text);

    if (NumberHelper.isNotNumber(text)) {
      return text.trim();
    }

    return Number(Number(text).toFixed(3));
  }
}

export { ReclameAquiAPI };
