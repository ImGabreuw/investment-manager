import { StockDailyLiquidityLast30Days } from "./stock-daily-liquidity";
import { StockEarningsLast12Months } from "./stock-earnings";
import { StockPriceHistory } from "./stock-price-history";

class Stock {
  constructor(
    readonly priceHistory: StockPriceHistory,
    readonly earnings: StockEarningsLast12Months,
    readonly type: StockType,
    readonly dailyLiquidity: StockDailyLiquidityLast30Days
  ) {}
}
