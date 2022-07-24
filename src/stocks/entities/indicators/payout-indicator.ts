class PayoutIndicator {
  constructor(
    readonly averagePayout: number | null,
    readonly currentPayout: number | null,
    readonly minPayout: number | null,
    readonly minPayoutYear: number | null,
    readonly maxPayout: number | null,
    readonly maxPayoutYear: number | null
  ) {}
}

export { PayoutIndicator };
