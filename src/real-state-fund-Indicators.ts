export class RealStateFundIndicators {
  constructor(
    public readonly currentValue: number,
    public readonly patrimony: number,
    public readonly marketValue: number,
    public readonly dividendYield: number,
    public readonly cashValue: number,
    public readonly numberOfShareholders: number,
    public readonly dividendYieldCAGRLast3Years: number,
    public readonly dividendYieldCAGRLast5Years: number,
    public readonly valueCAGRLast3Years: number,
    public readonly valueCAGRLast5Years: number,
  ) {}

  getDividendLast12Months(): number {
    return this.currentValue * (this.dividendYield / 100);
  }

  getNumberOfShares(): number {
    return this.marketValue / this.currentValue;
  }

  getPatrimonyValue(): number {
    return this.patrimony / this.getNumberOfShares();
  }

  getPVP(): number {
    return this.marketValue / this.patrimony;
  }
}
