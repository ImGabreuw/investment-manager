class NegotiationIndicator {
  constructor(
    readonly stockType: string,
    readonly tagAlong: number,
    readonly dailyLiquidity: number,
    readonly participationInIBOV: number
  ) {}
}

export { NegotiationIndicator };
