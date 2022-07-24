class PriceIndicator {
  constructor(
    readonly currentPrice: number | null,
    readonly minPriceIn1Year: number | null,
    readonly minPriceInCurrentMonth: number | null,
    readonly maxPriceIn1Year: number | null,
    readonly maxPriceInCurrentMonth: number | null
  ) {}
}

export { PriceIndicator };
