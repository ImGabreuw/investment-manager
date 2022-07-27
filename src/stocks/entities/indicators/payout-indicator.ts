class PayoutIndicator {
  constructor(
    readonly averagePayout: number,
    readonly currentPayout: number,
    readonly minPayout: number,
    readonly minPayoutYear: number,
    readonly maxPayout: number,
    readonly maxPayoutYear: number
  ) {}
}

export { PayoutIndicator };
