import { CurrencyHelper } from "../../helpers/currency-helper";

class StockPriceHistory {
  constructor(
    readonly current: number | null,
    readonly minIn1Year: number | null,
    readonly minInCurrentMonth: number | null,
    readonly maxIn1Year: number | null,
    readonly maxInCurrentMonth: number | null
  ) {}

  getCurrentFormatted(): string {
    return CurrencyHelper.format(this.current);
  }

  getMinIn1YearFormatted(): string {
    return CurrencyHelper.format(this.minIn1Year);
  }

  getMinInCurrentMonthFormatted(): string {
    return CurrencyHelper.format(this.minInCurrentMonth);
  }

  getMaxIn1YearFormatted(): string {
    return CurrencyHelper.format(this.maxIn1Year);
  }

  getMaxInCurrentMonthFormatted(): string {
    return CurrencyHelper.format(this.maxInCurrentMonth);
  }
}

export { StockPriceHistory };
