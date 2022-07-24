class RentabilityIndicator {
  constructor(
    readonly roe: number | null,
    readonly roa: number | null,
    readonly roic: number | null,
    readonly assetTurnover: number | null
  ) {}
}

export { RentabilityIndicator };
