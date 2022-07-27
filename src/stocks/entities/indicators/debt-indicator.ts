class DebtIndicator {
  constructor(
    readonly netDebtPerNetWorth: number,
    readonly netDebtPerEBITDA: number,
    readonly netDebtPerEBIT: number,
    readonly netWorthPerAssets: number,
    readonly liabilitiesPerAssets: number,
    readonly currentLiquidity: number
  ) {}
}

export { DebtIndicator };
