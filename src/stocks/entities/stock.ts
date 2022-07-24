class Stock {
  constructor(
    /*
    PREÇO
    */
    readonly currentPrice: number | null,
    readonly minPriceIn1Year: number | null,
    readonly minPriceInCurrentMonth: number | null,
    readonly maxPriceIn1Year: number | null,
    readonly maxPriceInCurrentMonth: number | null,
    /*
    VALORIZAÇÃO
    */
    readonly valuationIn1Year: number | null,
    readonly valuationInCurrentMonth: number | null,
    /*
    INDICADORES DE NEGOCIAÇÃO
    */
    readonly stockType: string | null,
    readonly tagAlong: number | null,
    readonly dailyLiquidity: number | null,
    readonly participationInIBOV: number | null,
    /*
    INDICADORES DE VALUATION
    */
    readonly dividendYield: number | null,
    readonly pricePerProfit: number | null,
    readonly pegRatio: number | null,
    readonly pricePerPatrimonialValue: number | null,
    readonly evPerEBITDA: number | null,
    readonly evPerEBIT: number | null,
    readonly pricePerEBITDA: number | null,
    readonly pricePerEBIT: number | null,
    readonly vpa: number | null,
    readonly pricePerAsset: number | null,
    readonly lpa: number | null,
    readonly pricePerNetEarnings: number | null,
    readonly pricePerFloatingCapital: number | null,
    readonly pricePerNetCurrentAssets: number | null,
    /*
    INDICADORES DE ENDIVIDAMENTO
    */
    readonly netDebtPerNetWorth: number | null,
    readonly netDebtPerEBITDA: number | null,
    readonly netDebtPerEBIT: number | null,
    readonly netWorthPerAssets: number | null,
    readonly liabilitiesPerAssets: number | null,
    readonly currentLiquidity: number | null,
    /*
    INDICADORES DE EFICIÊNCIA
    */
    readonly grossMargin: number | null,
    readonly EBITDAMargin: number | null,
    readonly EBITMargin: number | null,
    readonly netMargin: number | null,
    /*
    INDICADORES DE RENTABILIDADE
    */
    readonly roe: number | null,
    readonly roa: number | null,
    readonly roic: number | null,
    readonly assetTurnover: number | null,
    /*
    INDICADORES DE CRESCIMENTO
    */
    readonly earningsCAGRLast5Years: number | null,
    readonly profitCAGRLast5Years: number | null,
    /*
    PAYOUT
    */
    readonly averagePayout: number | null,
    readonly currentPayout: number | null,
    readonly minPayout: number | null,
    readonly minPayoutYear: number | null,
    readonly maxPayout: number | null,
    readonly maxPayoutYear: number | null
  ) {}
}
