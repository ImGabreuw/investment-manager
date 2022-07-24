class NegotiationIndicator {
  constructor(
    readonly stockType: string | null,
    readonly tagAlong: number | null,
    readonly dailyLiquidity: number | null,
    readonly participationInIBOV: number | null
  ) {}
}

export { NegotiationIndicator };
