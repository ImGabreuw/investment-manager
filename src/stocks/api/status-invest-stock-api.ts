import { Page } from "puppeteer";
import { CurrencyHelper } from "../helpers/currency-helper.js";
import { NumberHelper } from "../helpers/number-helper.js";
import { PuppeteerHelper } from "../helpers/puppeteer-helper.js";
import { StatusInvestStockDTO } from "./dto/status-invest-stock-dto.js";

const FULL_XPATH = {
  /*
  Resumo
  */
  "VALOR ATUAL": `/html/body/main/div[2]/div/div[1]/div/div[1]/div/div[1]/strong`,
  "MIN. 52 SEMANAS": `/html/body/main/div[2]/div/div[1]/div/div[2]/div/div[1]/strong`,
  "MIN. MÊS": `/html/body/main/div[2]/div/div[1]/div/div[2]/div/div[2]/div/span[2]`,
  "MÁX. 52 SEMANAS": `/html/body/main/div[2]/div/div[1]/div/div[3]/div/div[1]/strong`,
  "MÁX. MÊS": `/html/body/main/div[2]/div/div[1]/div/div[3]/div/div[2]/div/span[2]`,
  "DIVIDEND YIELD": `/html/body/main/div[2]/div/div[1]/div/div[4]/div/div[1]/strong`,
  "ÚLTIMOS 12 MESES": `/html/body/main/div[2]/div/div[1]/div/div[4]/div/div[2]/div/span[2]`,
  "VALORIZAÇÃO (12M)": `/html/body/main/div[2]/div/div[1]/div/div[5]/div/div[1]/strong`,
  "MÊS ATUAL": `/html/body/main/div[2]/div/div[1]/div/div[5]/div/div[2]/div/span[2]/b`,
  /*
  Indicadores de negociação
  */
  "TIPO AÇÃO": `/html/body/main/div[2]/div/div[5]/div/div/div[1]/div/div/h3/strong`,
  "TAG ALONG": `/html/body/main/div[2]/div/div[5]/div/div/div[2]/div/div/div/strong`,
  "LIQ. MÉD. DIÁRIA": `/html/body/main/div[2]/div/div[5]/div/div/div[3]/div/div/div/strong`,
  "PARTICIPAÇÃO NO IBOV": `/html/body/main/div[2]/div/div[5]/div/div/div[4]/div/a/div/div/strong`,
  /*
  Indicadores de valuation
  */
  "P/L": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[1]/div/div[2]/div/div/strong`,
  "PEG Ratio": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[1]/div/div[3]/div/div/strong`,
  "P/VP": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[1]/div/div[4]/div/div/strong`,
  "EV/EBITDA": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[1]/div/div[5]/div/div/strong`,
  "EV/EBIT": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[1]/div/div[6]/div/div/strong`,
  "P/EBITDA": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[1]/div/div[7]/div/div/strong`,
  "P/EBIT": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[1]/div/div[8]/div/div/strong`,
  VPA: `/html/body/main/div[2]/div/div[7]/div[2]/div/div[1]/div/div[9]/div/div/strong`,
  "P/Ativo": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[1]/div/div[10]/div/div/strong`,
  LPA: `/html/body/main/div[2]/div/div[7]/div[2]/div/div[1]/div/div[11]/div/div/strong`,
  "P/SR": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[1]/div/div[12]/div/div/strong`,
  "P/Cap. Giro": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[1]/div/div[13]/div/div/strong`,
  "P/Ativo Circ. Liq.": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[1]/div/div[14]/div/div/strong`,
  /*
  Indicadores de endividamento
  */
  "Dív. líquida/PL": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[2]/div/div[1]/div/div/strong`,
  "Dív. líquida/EBITDA": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[2]/div/div[2]/div/div/strong`,
  "Dív. líquida/EBIT": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[2]/div/div[3]/div/div/strong`,
  "PL/Ativos": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[2]/div/div[4]/div/div/strong`,
  "Passivos/Ativos": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[2]/div/div[5]/div/div/strong`,
  "Liq. corrente": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[2]/div/div[6]/div/div/strong`,
  /*
  Indicadores de eficiência
  */
  "M. Bruta": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[3]/div/div[1]/div/div/strong`,
  "M. EBITDA": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[3]/div/div[2]/div/div/strong`,
  "M. EBIT": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[3]/div/div[3]/div/div/strong`,
  "M. Líquida": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[3]/div/div[4]/div/div/strong`,
  /*
  Indicadores de rentabilidade
  */
  ROE: `/html/body/main/div[2]/div/div[7]/div[2]/div/div[4]/div/div[1]/div/div/strong`,
  ROA: `/html/body/main/div[2]/div/div[7]/div[2]/div/div[4]/div/div[2]/div/div/strong`,
  ROIC: `/html/body/main/div[2]/div/div[7]/div[2]/div/div[4]/div/div[3]/div/div/strong`,
  "Giro ativos": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[4]/div/div[4]/div/div/strong`,
  /*
  Indicadores de crescimento
  */
  "CAGR Receitas 5 anos": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[5]/div/div[1]/div/div/strong`,
  "CAGR Lucros 5 anos": `/html/body/main/div[2]/div/div[7]/div[2]/div/div[5]/div/div[2]/div/div/strong`,
};

const BASE_URL = "https://statusinvest.com.br/acoes";

class StatusInvestStockAPI {
  constructor(private readonly page: Page) {}

  async search(stockName: string) {
    await this.page.goto(`${BASE_URL}/${stockName}`);
  }

  async extractData(): Promise<StatusInvestStockDTO> {
    const dto = Object.create(new StatusInvestStockDTO());

    for (const indicatorName of Object.getOwnPropertyNames(FULL_XPATH)) {
      const indicatorXPATH = eval(`FULL_XPATH["${indicatorName}"]`);

      const indicator = await PuppeteerHelper.extractTextFrom(
        this.page,
        indicatorXPATH
      );

      dto[indicatorName] = this.normalizeAndConvert(indicator);
    }

    return dto;
  }

  private normalizeAndConvert(text: string | null): string | number {
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
