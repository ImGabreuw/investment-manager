import { Page } from "puppeteer";
import { RealStateFundIndicators } from "./real-state-fund-Indicators.js";
import { extractFrom } from "./utils.js";

class StatusInvest {
  static readonly BASE_URL = "https://statusinvest.com.br/fundos-imobiliarios";

  constructor(
    public readonly realStateFundName: string,
    public readonly page: Page
  ) {}


  private async getCurrentValue(): Promise<number | null> {
    const xpath = `/html/body/main/div[2]/div[1]/div[1]/div/div[1]/strong`;

    const rawCurrentValue = await extractFrom(this.page, xpath);

    if (!rawCurrentValue) {
      console.warn(`Não foi possível extrair "VALOR ATUAL" de ${this.page.url()}`);
      return null;
    }

    const currentValue = rawCurrentValue.replace(",", ".");

    return parseFloat(currentValue);
  }

  private async getPatrimony(): Promise<number | null> {
    const xpath = `/html/body/main/div[2]/div[5]/div/div[1]/div/div[2]/span[2]`;

    const rawPatrimony = await extractFrom(this.page, xpath);

    if (!rawPatrimony) {
      console.warn(`Não foi possível extrair "PATRIMÔNIO" de ${this.page.url()}`);
      return null;
    }

    const patrimony = rawPatrimony
      .split(" ")
      .pop()
      ?.replaceAll(".", "") as string;

    return parseFloat(patrimony);
  }

  private async getMarketValue(): Promise<number | null> {
    const xpath = `/html/body/main/div[2]/div[5]/div/div[2]/div/div[2]/span[2]`;

    const rawMarketValue = await extractFrom(this.page, xpath);

    if (!rawMarketValue) {
      console.warn(
        `Não foi possível extrair "VALOR DE MERCADO" de ${this.page.url()}`
      );
      return null;
    }

    const marketValue = rawMarketValue
      .split(" ")
      .pop()
      ?.replaceAll(".", "") as string;

    return parseFloat(marketValue);
  }

  private async getDividendYieldInPercentage(): Promise<number | null> {
    const xpath = `/html/body/main/div[2]/div[1]/div[4]/div/div[1]/strong`;

    const rawDividendYield = await extractFrom(this.page, xpath);

    if (!rawDividendYield) {
      console.warn(`Não foi possível extrair "DIVIDEND YIELD" de ${this.page.url()}`);
      return null;
    }

    const dividendYield = rawDividendYield.replace(",", ".");

    return parseFloat(dividendYield);
  }

  private async getCashValue(): Promise<number | null> {
    const xpath = `/html/body/main/div[2]/div[5]/div/div[3]/div/div[2]/span[2]`;

    const rawCashValue = await extractFrom(this.page, xpath);

    if (!rawCashValue) {
      console.warn(`Não foi possível extrair "VALOR EM CAIXA" de ${this.page.url()}`);
      return null;
    }

    const cashValue = rawCashValue
      .split(" ")
      .pop()
      ?.replaceAll(".", "")
      .replace(",", ".") as string;

    return parseFloat(cashValue);
  }

  private async getNumberOfShareholders(): Promise<number | null> {
    const xpath = `/html/body/main/div[2]/div[5]/div/div[6]/div/div[1]/strong`;

    const rawNumberOfShareholder = await extractFrom(this.page, xpath);

    if (!rawNumberOfShareholder) {
      console.warn(
        `Não foi possível extrair "NÚMERO DE COTISTAS" de ${this.page.url()}`
      );
      return null;
    }

    const numberOfShareholder = rawNumberOfShareholder.replaceAll(".", "");

    return parseFloat(numberOfShareholder);
  }

  private async getDividendYieldCAGRLast3Years(): Promise<number | null> {
    const xpath = `/html/body/main/div[2]/div[5]/div/div[4]/div/div[1]/strong`;

    const rawDividendYieldCAGR = await extractFrom(this.page, xpath);

    if (!rawDividendYieldCAGR) {
      console.warn(
        `Não foi possível extrair "DY CAGR (3 ANOS)" de ${this.page.url()}`
      );
      return null;
    }

    const dividendYieldCAGR = rawDividendYieldCAGR.replaceAll(",", ".");

    return parseFloat(dividendYieldCAGR);
  }

  private async getDividendYieldCAGRLast5Years(): Promise<number | null> {
    const xpath = `/html/body/main/div[2]/div[5]/div/div[4]/div/div[2]/span[2]`;

    const rawDividendYieldCAGR = await extractFrom(this.page, xpath);

    if (!rawDividendYieldCAGR) {
      console.warn(
        `Não foi possível extrair "DY CAGR (5 ANOS)" de ${this.page.url()}`
      );
      return null;
    }

    const dividendYieldCAGR = rawDividendYieldCAGR.replaceAll(",", ".");

    return parseFloat(dividendYieldCAGR);
  }

  private async getValueCAGRLast3Years(): Promise<number | null> {
    const xpath = `/html/body/main/div[2]/div[5]/div/div[5]/div/div[1]/strong`;

    const rawValueCAGR = await extractFrom(this.page, xpath);

    if (!rawValueCAGR) {
      console.warn(
        `Não foi possível extrair "VALOR CAGR (3 ANOS)" de ${this.page.url()}`
      );
      return null;
    }

    const valueCAGR = rawValueCAGR.replaceAll(",", ".");

    return parseFloat(valueCAGR);
  }

  private async getValueCAGRLast5Years(): Promise<number | null> {
    const xpath = `/html/body/main/div[2]/div[5]/div/div[5]/div/div[2]/span[2]`;

    const rawValueCAGR = await extractFrom(this.page, xpath);

    if (!rawValueCAGR) {
      console.warn(
        `Não foi possível extrair "VALOR CAGR (5 ANOS)" de ${this.page.url()}`
      );
      return null;
    }

    const valueCAGR = rawValueCAGR.replaceAll(",", ".");

    return parseFloat(valueCAGR);
  }

  async getRealStateFundIndicators(): Promise<RealStateFundIndicators> {
    await this.page.goto(`${StatusInvest.BASE_URL}/${this.realStateFundName}`);

    const currentValue = await this.getCurrentValue();
    const patrimony = await this.getPatrimony();
    const marketValue = await this.getMarketValue();
    const dividendYield = await this.getDividendYieldInPercentage();
    const cashValue = await this.getCashValue();
    const numberOfShareholders = await this.getNumberOfShareholders();
    const dividendYieldCAGRLast3Years = await this.getDividendYieldCAGRLast3Years();
    const dividendYieldCAGRLast5Years = await this.getDividendYieldCAGRLast5Years();
    const valueCAGRLast3Years = await this.getValueCAGRLast3Years();
    const valueCAGRLast5Years = await this.getValueCAGRLast5Years();

    return new RealStateFundIndicators(
      currentValue,
      patrimony,
      marketValue,
      dividendYield,
      cashValue,
      numberOfShareholders,
      dividendYieldCAGRLast3Years,
      dividendYieldCAGRLast5Years,
      valueCAGRLast3Years,
      valueCAGRLast5Years
    );
  }

}

export { StatusInvest };
