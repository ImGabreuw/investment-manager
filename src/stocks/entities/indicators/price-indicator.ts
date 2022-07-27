class PriceIndicator {
  constructor(
    readonly currentPrice: number,
    readonly minPriceIn1Year: number,
    readonly minPriceInCurrentMonth: number,
    readonly maxPriceIn1Year: number,
    readonly maxPriceInCurrentMonth: number
  ) {}
}

export { PriceIndicator };
