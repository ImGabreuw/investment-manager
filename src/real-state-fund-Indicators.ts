import { parse } from "node:path/win32";

export class RealStateFundIndicators {
  constructor(
    public readonly currentValue: number | null,
    public readonly patrimony: number | null,
    public readonly marketValue: number | null,
    public readonly dividendYield: number | null,
    public readonly cashValue: number | null,
    public readonly numberOfShareholders: number | null,
    public readonly dividendYieldCAGRLast3Years: number | null,
    public readonly dividendYieldCAGRLast5Years: number | null,
    public readonly valueCAGRLast3Years: number | null,
    public readonly valueCAGRLast5Years: number | null
  ) {}

  getDividendLast12Months(): number | null {
    if (!this.currentValue || !this.dividendYield) {
      return null;
    }

    const dividendYieldLast12Months =
      this.currentValue * (this.dividendYield / 100);

    return parseFloat(dividendYieldLast12Months.toFixed(2));
  }

  getNumberOfShares(): number | null {
    if (!this.marketValue || !this.currentValue) {
      return null;
    }

    const numberOfShares = this.marketValue / this.currentValue;

    return parseFloat(numberOfShares.toFixed(0));
  }

  getPatrimonyValue(): number | null {
    const numberOfShares = this.getNumberOfShares();

    if (!this.patrimony || !numberOfShares) {
      return null;
    }

    const patrimonyValue = this.patrimony / numberOfShares;

    return parseFloat(patrimonyValue.toFixed(2));
  }

  getPVP(): number | null {
    if (!this.marketValue || !this.patrimony) {
      return null;
    }

    const PVP = this.marketValue / this.patrimony;

    return parseFloat(PVP.toFixed(2));
  }
}
