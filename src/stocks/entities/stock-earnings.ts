import { CurrencyHelper } from "../helpers/currency-helper";
import { NumberHelper } from "../helpers/number-helper";

class StockEarningsLast12Months {
  constructor(
    readonly dividendYield: number | null,
    readonly dividend: number | null
  ) {}

  getDividendYieldFormatted(): string {
    return NumberHelper.formatToPercentage(this.dividendYield);
  }

  getDividend(): string {
    return CurrencyHelper.format(this.dividend);
  }
}

export { StockEarningsLast12Months };
