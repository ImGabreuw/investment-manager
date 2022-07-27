class ValuationIndicator {
  constructor(
    readonly dividendYield: number,
    readonly dividendIn1Year: number,
    readonly pricePerProfit: number,
    readonly pegRatio: number,
    readonly pricePerPatrimonialValue: number,
    readonly evPerEBITDA: number,
    readonly evPerEBIT: number,
    readonly pricePerEBITDA: number,
    readonly pricePerEBIT: number,
    readonly vpa: number,
    readonly pricePerAsset: number,
    readonly lpa: number,
    readonly pricePerNetEarnings: number,
    readonly pricePerFloatingCapital: number,
    readonly pricePerNetCurrentAssets: number,
  ) {}
}

export { ValuationIndicator }
