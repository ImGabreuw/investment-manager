import { Page } from "puppeteer";
import { PuppeteerHelper } from "../helpers/puppeteer-helper.js";
import { StatusInvestStockDTO } from "./dto/status-invest-stock-dto.js";

const FULL_XPATH = {
  "VALOR ATUAL": `/html/body/main/div[2]/div/div[1]/div/div[1]/div/div[1]/strong`,
  "MIN. 52 SEMANAS": `/html/body/main/div[2]/div/div[1]/div/div[2]/div/div[1]/strong`,
  "MIN. MÊS": `/html/body/main/div[2]/div/div[1]/div/div[2]/div/div[2]/div/span[2]`,
  "MÁX. 52 SEMANAS": `/html/body/main/div[2]/div/div[1]/div/div[3]/div/div[1]/strong`,
  "MÁX. MÊS": `/html/body/main/div[2]/div/div[1]/div/div[3]/div/div[2]/div/span[2]`,
  "DIVIDEND YIELD": `/html/body/main/div[2]/div/div[1]/div/div[4]/div/div[1]/strong`,
  "ÚLTIMOS 12 MESES": `/html/body/main/div[2]/div/div[1]/div/div[4]/div/div[2]/div/span[2]`,
  "VALORIZAÇÃO (12M)": `/html/body/main/div[2]/div/div[1]/div/div[5]/div/div[1]/strong`,
  "MÊS ATUAL": `/html/body/main/div[2]/div/div[1]/div/div[5]/div/div[2]/div/span[2]/b`,
  "TIPO AÇÃO": `/html/body/main/div[2]/div/div[5]/div/div/div[1]/div/div/h3/strong`,
  "TAG ALONG": `/html/body/main/div[2]/div/div[5]/div/div/div[2]/div/div/div/strong`,
  "LIQ. MÉD. DIÁRIA": `/html/body/main/div[2]/div/div[5]/div/div/div[3]/div/div/div/strong`,
  "PARTICIPAÇÃO NO IBOV": `/html/body/main/div[2]/div/div[5]/div/div/div[4]/div/a/div/div/strong`,
};

const BASE_URL = "https://statusinvest.com.br/acoes";

class StatusInvestStockAPI {
  constructor(private readonly page: Page) {}

  async search(stockName: string) {
    await this.page.goto(`${BASE_URL}/${stockName}`);
  }

  async extractData(): Promise<StatusInvestStockDTO> {
    const dto = Object.create(StatusInvestStockDTO);

    for (const indicatorName of Object.getOwnPropertyNames(FULL_XPATH)) {
      const indicatorXPATH = eval(`FULL_XPATH["${indicatorName}"]`);

      dto[indicatorName] = await PuppeteerHelper.extractTextFrom(
        this.page,
        indicatorXPATH
      );
    }

    return dto;
  }
}

export { StatusInvestStockAPI };
