import { StatusInvestStockDTO } from "../../api/dto/status-invest-stock-dto.js";
import { PriceIndicator } from "../../entities/indicators/price-indicator.js";
import { Stock } from "../../entities/stock.js";

const priceIndicator = {
  currentPrice: "VALOR ATUAL",
  minPriceIn1Year: "MIN. 52 SEMANAS",
  minPriceInCurrentMonth: "MIN. MÊS",
  maxPriceIn1Year: "MÁX. 52 SEMANAS",
  maxPriceInCurrentMonth: "MÁX. MÊS",
};

const valorizationIndicator = {
  valuationIn1Year: "VALORIZAÇÃO (12M)",
  valuationInCurrentMonth: "MÊS ATUAL",
};

const negotiationIndicator = {
  stockType: "TIPO AÇÃO",
  tagAlong: "TAG ALONG",
  dailyLiquidity: "LIQ. MÉD. DIÁRIA",
  participationInIBOV: "PARTICIPAÇÃO NO IBOV",
};

const valuationIndicator = {
  dividendYield: "DIVIDEND YIELD",
  dividendIn1Year: "ÚLTIMOS 12 MESES",
  pricePerProfit: "P/L",
  pegRatio: "PEG Ratio",
  pricePerPatrimonialValue: "P/VP",
  evPerEBITDA: "EV/EBITDA",
  evPerEBIT: "EV/EBIT",
  pricePerEBITDA: "P/EBITDA",
  pricePerEBIT: "P/EBIT",
  vpa: "VPA",
  pricePerAsset: "P/Ativo",
  lpa: "LPA",
  pricePerNetEarnings: "P/SR",
  pricePerFloatingCapital: "P/Cap. Giro",
  pricePerNetCurrentAssets: "P/Ativo Circ. Liq.",
};

const debtIndicator = {
  netDebtPerNetWorth: "Dív. líquida/PL",
  netDebtPerEBITDA: "Dív. líquida/EBITDA",
  netDebtPerEBIT: "Dív. líquida/EBIT",
  netWorthPerAssets: "PL/Ativos",
  liabilitiesPerAssets: "Passivos/Ativos",
  currentLiquidity: "Liq. corrente",
};

const efficiencyIndicator = {
  grossMargin: "M. Bruta",
  EBITDAMargin: "M. EBITDA",
  EBITMargin: "M. EBIT",
  netMargin: "M. Líquida",
};

const rentabilityIndicator = {
  roe: "ROE",
  roa: "ROA",
  roic: "ROIC",
  assetTurnover: "Giro ativos",
};

const growthIndicator = {
  earningsCAGRLast5Years: "CAGR Receitas 5 anos",
  profitCAGRLast5Years: "CAGR Lucros 5 anos",
};

const payoutIndicator = {
  averagePayout: "PAYOUT MÉDIA",
  currentPayout: "PAYOUT ATUAL",
  minPayout: "PAYOUT MENOR VALOR",
  minPayoutYear: "PAYOUT ANO MENOR VALOR",
  maxPayout: "PAYOUT MAIOR VALOR",
  maxPayoutYear: "PAYOUT ANO MAIOR VALOR",
};

const interpreseInfo = {
  name: "NOME DA EMPRESA",
  netWorth: "PATRIMÔNIO LÍQUIDO",
  assets: " ATIVOS",
  currentAssets: "ATIVO CIRCULANTE",
  grossDebt: "DÍVIDA BRUTA",
  marketValue: "VALOR DE MERCADO",
  interpreseValue: "VALOR DE FIRMA",
  totalNumberOfPapers: "Nº TOTAL DE PAPÉIS",
  listingSegment: "SEGMENTO DE LISTAGEM",
  freeFloat: "FREE FLOAT",
  sectorOfActivity: "SETOR DE ATUAÇÃO",
  subsectorOfActivity: "SUBSETOR DE ATUAÇÃO",
  segmentOfActivity: "SEGMENTO DE ATUAÇÃO",
};

const INDICATORS = {
  priceIndicator,
  valorizationIndicator,
  negotiationIndicator,
  valuationIndicator,
  debtIndicator,
  efficiencyIndicator,
  rentabilityIndicator,
  growthIndicator,
  payoutIndicator,
  interpreseInfo,
};

class StatusInvestMapper {
  private constructor() {}

  static async map(dto: StatusInvestStockDTO): Promise<Stock> {
    const stock = {} as Stock;

    for (const section of Object.keys(INDICATORS)) {
      const indicator = eval(`INDICATORS["${section}"]`);

      const cache = new Map<string, any>();

      for (const indicatorName of Object.keys(indicator)) {
        const indicatorNameDTO = eval(`INDICATORS["${section}"]["${indicatorName}"]`);
        const indicatorValueDTO = eval(`dto["${indicatorNameDTO}"]`);

        cache.set(indicatorName, indicatorValueDTO);
      }

      let indicatorInstanceArguments = "";

      for (const value of cache.values()) {
        if (typeof value === "string") {
          indicatorInstanceArguments += `"${value}",`;
          continue;
        }

        indicatorInstanceArguments += `${value},`;
      }

      indicatorInstanceArguments = indicatorInstanceArguments.slice(0, -1);

      const indicatorClassName = StatusInvestMapper.getIndicatorClassName(section);
      const indicatorRelativeFile = StatusInvestMapper.getIndicatorRelativePath(section);

      const indicatorFile = await import(indicatorRelativeFile);
      const indicatorInstance = eval(`new indicatorFile.${indicatorClassName}(${indicatorInstanceArguments});`);

      console.log(indicatorInstance);
    }

    return stock;
  }

  static getIndicatorClassName(section: string): string {
    return section.charAt(0).toUpperCase() + section.slice(1);
  }

  static getIndicatorFilename(section: string): string {
    const splitByCapitalLetter = section.split(/(?=[A-Z])/);

    return splitByCapitalLetter[0] + "-" + splitByCapitalLetter[1].toLowerCase();
  }

  static getIndicatorRelativePath(section: string): string {
    return `../../entities/indicators/${this.getIndicatorFilename(section)}.js`
  }
}

export { StatusInvestMapper };
