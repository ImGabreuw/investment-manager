class DebtIndicator {
  constructor(
    readonly netDebtPerNetWorth: number | null,
    readonly netDebtPerEBITDA: number | null,
    readonly netDebtPerEBIT: number | null,
    readonly netWorthPerAssets: number | null,
    readonly liabilitiesPerAssets: number | null,
    readonly currentLiquidity: number | null
  ) {}
}

export { DebtIndicator };
