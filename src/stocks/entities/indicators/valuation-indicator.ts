class ValuationIndicator {
  constructor(
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
  ) {}
}

export { ValuationIndicator }
