import { CurrencyHelper } from "../helpers/currency-helper";
import { NumberHelper } from "../helpers/number-helper";

class StockDailyLiquidityLast30Days {
  constructor(
    readonly volume: number | null,
    readonly negotiations: number | null
  ) {}

  getVolumeFormatted(): string {
    return CurrencyHelper.format(this.volume);
  }

  getNegotiations(): string {
    return NumberHelper.format(this.negotiations);
  }
}

export { StockDailyLiquidityLast30Days };
