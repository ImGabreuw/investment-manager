export class RealStateFundIndicators {
  readonly dividendLast12Months: number | null;
  readonly numberOfShares: number | null;
  readonly patrimonyValue: number | null;
  readonly pVP: number | null;

  constructor(
    readonly currentValue: number | null,
    readonly patrimony: number | null,
    readonly marketValue: number | null,
    readonly dividendYield: number | null,
    readonly cashValue: number | null,
    readonly numberOfShareholders: number | null,
    readonly dividendYieldCAGRLast3Years: number | null,
    readonly dividendYieldCAGRLast5Years: number | null,
    readonly valueCAGRLast3Years: number | null,
    readonly valueCAGRLast5Years: number | null,
    readonly averageMonthlyYieldLast24Months: number | null,
    readonly averageDailyLiquidityLast30Days: number | null,
    readonly administrationFee: number | null,
    readonly participationInIFIX: number | null
  ) {
    this.dividendLast12Months = this.getDividendLast12Months();
    this.numberOfShares = this.getNumberOfShares();
    this.patrimonyValue = this.getPatrimonyValue();
    this.pVP = this.getPVP();
  }

  private getDividendLast12Months(): number | null {
    if (!this.currentValue || !this.dividendYield) {
      return null;
    }

    const dividendYieldLast12Months =
      this.currentValue * (this.dividendYield / 100);

    return parseFloat(dividendYieldLast12Months.toFixed(2));
  }

  private getNumberOfShares(): number | null {
    if (!this.marketValue || !this.currentValue) {
      return null;
    }

    const numberOfShares = this.marketValue / this.currentValue;

    return parseFloat(numberOfShares.toFixed(0));
  }

  private getPatrimonyValue(): number | null {
    const numberOfShares = this.getNumberOfShares();

    if (!this.patrimony || !numberOfShares) {
      return null;
    }

    const patrimonyValue = this.patrimony / numberOfShares;

    return parseFloat(patrimonyValue.toFixed(2));
  }

  private getPVP(): number | null {
    if (!this.marketValue || !this.patrimony) {
      return null;
    }

    const PVP = this.marketValue / this.patrimony;

    return parseFloat(PVP.toFixed(2));
  }
}
